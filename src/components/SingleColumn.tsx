import React from 'react';
import Grid from '@mui/material/Grid';
import ColumnHeader from './ColumnHeader';

interface propTypes {
    position: Number;
    name: String;
}

function SingleColumn({ position, name }: propTypes) {
    return (
        <Grid item xs={3} sx={{ color: '#FFF' }}>
            <ColumnHeader name={name} />
        </Grid>
    );
}

export default SingleColumn;
