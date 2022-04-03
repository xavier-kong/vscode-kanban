import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const style = {
    color: '#FFF',
    border: 'none',
};

function CreateColumnButton() {
    return (
        <Button
            variant="text"
            startIcon={<AddIcon />}
            style={style}
            disableRipple={false}
        >
            Add Column
        </Button>
    );
}

export default CreateColumnButton;
