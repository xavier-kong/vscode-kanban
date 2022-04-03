import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateColumnButton() {
    return (
        <Button variant="outlined" startIcon={<AddIcon />}>
            Add Column
        </Button>
    );
}

export default CreateColumnButton;
