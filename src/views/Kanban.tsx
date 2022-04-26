import React, { useEffect, useState } from 'react';
import CreateColumnButton from '../components/CreateColumnButton';
import SingleColumn from '../components/SingleColumn';
import Grid, { GridSize } from '@mui/material/Grid';

const mockData = {
    name: 'default',
    parent: null,
    columns: [
        {
            name: 'To do',
            default: true,
            position: 0,
            status: 'display',
            // color
            tasks: [],
        },
        {
            name: 'Doing',
            default: false,
            position: 1,
            status: 'display',
            // color
            tasks: [],
        },
        {
            name: 'Done',
            default: true,
            position: 2,
            status: 'display',
            // color
            tasks: [],
        },
    ],
};

interface Columns {
    name: string;
    default: boolean;
    status: string;
    position: number;
    tasks: never[];
}

function Kanban() {
    const [columns, setColumns] = useState<Columns[]>([]);
    const xs: GridSize = 'auto';

    useEffect(() => {
        setColumns(mockData.columns);
    }, []);

    function createColumn() {
        // do not allow if new column exists
        if (!columns.some((column) => column.status === 'new')) {
            const newColumns = [...columns];
            newColumns.push({
                name: 'Waiting',
                default: true,
                position: columns.length,
                status: 'new',
                // color
                tasks: [],
            });
            setColumns(newColumns);
        }
    }

    function setColumnName(name: string, position: number) {
        if (name) {
            const newColumns = [...columns];
            const columnIndex = newColumns.findIndex(
                (element) => element.position === position
            );
            newColumns[columnIndex].name = name;
            newColumns[columnIndex].status = 'display';
            setColumns(newColumns);
        }
    }

    function setColumnStatus(statu: string, position: number) {}

    return (
        <Grid
            container
            spacing="auto"
            wrap="nowrap"
            marginLeft="auto"
            width="auto"
            sx={{ overflow: 'auto' }}
        >
            {columns.map((column) => (
                <SingleColumn
                    key={column.position}
                    column={column}
                    xs={xs}
                    setColumnName={setColumnName}
                />
            ))}
            <Grid key={columns.length + 1} item xs={xs}>
                <CreateColumnButton createColumn={createColumn} />
            </Grid>
        </Grid>
    );
}

export default Kanban;
