import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const style = {
    color: '#FFF',
    border: 'none',
};

interface PropTypes {
    createColumn: Function;
}

function CreateColumnButton({ createColumn }: PropTypes) {
    return (
        <Button
            variant="text"
            startIcon={<AddIcon />}
            style={style}
            disableRipple={false}
            onClick={(e) => {
                e.preventDefault();
                createColumn();
            }}
        >
            Add Column
        </Button>
    );
}

export default CreateColumnButton;
