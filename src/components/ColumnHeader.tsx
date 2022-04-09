import { Container } from '@mui/material';
import React from 'react';

interface propTypes {
    name: string;
    status: string;
}

function ColumnHeader({ name, status }: propTypes) {
    /* 
    if status is new
        show a text box
        add listner on click away or enter or click save icon to save name
        logic to save name
    */
    return <Container sx={{ marginTop: '10px' }}>{name}</Container>;
}

export default ColumnHeader;
