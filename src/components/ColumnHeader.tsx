import { Container } from '@mui/material';
import React from 'react';

interface propTypes {
    name: string;
    status: string;
}

function ColumnHeader({ name, status }: propTypes) {
    return <Container sx={{ marginTop: '10px' }}>{name}</Container>;
}

export default ColumnHeader;
