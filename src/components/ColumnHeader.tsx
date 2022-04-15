import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

interface propTypes {
    name: string;
    status: string;
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});

function ColumnHeader({ name, status }: propTypes) {
    const [input, setInput] = useState('');

    function setColumnName(input: string) {}

    function onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            setColumnName(input);
        }
    }

    return (
        <Container sx={{ marginTop: '10px' }}>
            {status === 'new' ? (
                <Box component="form" noValidate autoComplete="off">
                    <ClickAwayListener
                        onClickAway={() => {
                            setColumnName(input);
                        }}
                    >
                        <CssTextField
                            label="Enter Column Name"
                            id="custom-css-outlined-input"
                            variant="standard"
                            autoFocus={true}
                            inputProps={{ style: { color: 'white' } }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            onKeyPress={onKeyPress}
                            value={input}
                            onChange={(event) => {
                                setInput(event.target.value);
                            }}
                        />
                    </ClickAwayListener>
                </Box>
            ) : (
                name
            )}
        </Container>
    );
}

export default ColumnHeader;
