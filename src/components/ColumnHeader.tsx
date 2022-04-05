import { Container } from '@mui/material';
import React from 'react';

interface propTypes {
    name: String;
}

function ColumnHeader({ name }: propTypes) {
    return <Container sx={{ marginTop: '10px' }}>{name}</Container>;
}

export default ColumnHeader;
