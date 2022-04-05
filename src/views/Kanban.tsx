import React, { useState } from 'react';
import CreateColumnButton from '../components/CreateColumnButton';
import SingleColumn from '../components/SingleColumn';
import Grid from '@mui/material/Grid';

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
    const spacing = 2;
    return (
        <div>
            {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}> */}
            <Grid container justifyContent="left" spacing={spacing}>
                {columns.map((column) => (
                    <SingleColumn
                        position={column.position}
                        name={column.name}
                    />
                ))}
                <Grid key={columns.length} item xs={3}>
                    <CreateColumnButton createColumn={createColumn} />
                </Grid>
            </Grid>
            {/* </Grid> */}
        </div>
    );
}

export default Kanban;
