import React, { useState } from 'react';
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

function Kanban() {
    const [columns, setColumns] = useState(mockData.columns);
    function createColumn() {}
    const xs: GridSize = 3;

    return (
        <div>
            <Grid container justifyContent="left" spacing={2}>
                {columns.map((column) => (
                    <SingleColumn
                        key={column.position}
                        position={column.position}
                        name={column.name}
                        xs={xs}
                    />
                ))}
                <Grid key={columns.length} item xs={xs}>
                    <CreateColumnButton createColumn={createColumn} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Kanban;
