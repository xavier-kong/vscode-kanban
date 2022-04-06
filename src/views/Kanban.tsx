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
            // color
            tasks: [],
        },
        {
            name: 'Doing',
            default: false,
            position: 1,
            // color
            tasks: [],
        },
        {
            name: 'Done',
            default: true,
            position: 2,
            // color
            tasks: [],
        },
    ],
};

interface Columns {
    name: string;
    default: boolean;
    position: number;
    tasks: never[];
}

function Kanban() {
    const [columns, setColumns] = useState<Columns[]>([]);
    const xs: GridSize = 'auto';

    function createColumn() {
        const newColumns = [...columns];
        newColumns.push({
            name: 'Waiting',
            default: true,
            position: columns.length,
            // color
            tasks: [],
        });
        setColumns(newColumns);
    }

    useEffect(() => {
        setColumns(mockData.columns);
    }, []);

    return (
        <Grid
            container
            spacing={8}
            wrap="nowrap"
            marginLeft={0}
            width="auto"
            sx={{ overflow: 'auto' }}
        >
            {columns.map((column) => (
                <SingleColumn
                    key={column.position}
                    position={column.position}
                    name={column.name}
                    xs={xs}
                />
            ))}
            <Grid key={columns.length + 1} item xs={xs}>
                <CreateColumnButton createColumn={createColumn} />
            </Grid>
        </Grid>
    );
}

export default Kanban;
