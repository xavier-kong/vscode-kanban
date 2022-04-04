import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const style = {
    color: '#FFF',
    border: 'none',
};

interface propTypes {
    createColumn: Function;
}

function CreateColumnButton({ createColumn }: propTypes) {
    return (
        <Button
            variant="text"
            startIcon={<AddIcon />}
            style={style}
            disableRipple={false}
            onClick={() => {
                createColumn();
            }}
        >
            Add Column
        </Button>
    );
}

export default CreateColumnButton;
