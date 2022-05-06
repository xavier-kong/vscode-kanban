import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/material';

const style = {
    color: '#FFF',
    border: 'none',
};

interface PropTypes {
    createColumn: Function;
}

function CreateColumnButton({ createColumn }: PropTypes) {
    return (
        <Container>
            <Box sx={{ border: 0.1, borderColor: 'white', borderRadius: '5%' }}>
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
        </Container>
    );
}

export default CreateColumnButton;
