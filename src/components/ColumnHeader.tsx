import { Container, FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { KeyboardEvent, useState } from 'react';

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

const onKeyPress = (event: any) => {
    if (event.key === 'Enter') {
        console.log('Input value', event.target.value);
        event.preventDefault();
    }
};

const onClickAway = () => {
    console.log('clicked away');
};

/* 
might have to make it a controlled component
abstract set column name function
call in both keypress and clickaway
clean up this mess ugh
*/

function ColumnHeader({ name, status }: propTypes) {
    const [input, setInput] = useState('');

    const handleChange = (event: any) => {
        setInput(event.target.value);
    };
    /* 
    if status is new
        show a text box
        add listner on click away or enter or click save icon to save name
        logic to save name
    */
    return (
        <Container sx={{ marginTop: '10px' }}>
            {status === 'new' ? (
                <Box
                    component="form"
                    // sx={
                    //     {
                    //         '& > :not(style)': { m: 1, width: '25ch' },
                    //     }
                    // }
                    noValidate
                    autoComplete="off"
                >
                    <ClickAwayListener onClickAway={onClickAway}>
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
                            onChange={handleChange}
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
