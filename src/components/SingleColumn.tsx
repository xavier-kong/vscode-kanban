import React from 'react';
import Grid, { GridSize } from '@mui/material/Grid';
import ColumnHeader from './ColumnHeader';

interface propTypes {
    xs: GridSize;
    column: Columns;
}

interface Columns {
    name: string;
    default: boolean;
    status: string;
    position: number;
    tasks: never[];
}

function SingleColumn({ column, xs }: propTypes) {
    const { name, status } = column;
    return (
        <Grid item xs={xs} sx={{ color: '#FFF' }}>
            <ColumnHeader name={name} status={status} />
        </Grid>
    );
}

export default SingleColumn;
