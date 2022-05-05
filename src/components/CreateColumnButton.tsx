import React from 'react';
import Box from '@mui/material/Box';
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
        <Box sx={{ border: 1, borderColor: 'white' }}>
            <Button
                variant="text"
                startIcon={<AddIcon />}
                style={style}
                disableRipple={false}
                onClick={(e) => {
                    e.preventDefault();
                    createColumn();
                }}
                sx={{ border: 1, borderColor: 'white' }}
            >
                Add Column
            </Button>
        </Box>
    );
}

export default CreateColumnButton;
