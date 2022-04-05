import React from 'react';
import Grid, { GridSize } from '@mui/material/Grid';
import ColumnHeader from './ColumnHeader';

interface propTypes {
    position: number;
    xs: GridSize;
    name: String;
}

function SingleColumn({ name, xs }: propTypes) {
    return (
        <Grid item xs={xs} sx={{ color: '#FFF' }}>
            <ColumnHeader name={name} />
        </Grid>
    );
}

export default SingleColumn;
