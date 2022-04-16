import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface propTypes {
    name: string;
    status: string;
    setColumnName: Function;
    displayIcon: boolean;
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

function ColumnHeader({ name, status, setColumnName, displayIcon }: propTypes) {
    const [input, setInput] = useState('');

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
                            inputProps={{
                                style: { color: 'white' },
                            }}
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
                <Box>
                    {name}
                    <MoreVertIcon />
                </Box>
            )}
        </Container>
    );
}

export default ColumnHeader;
