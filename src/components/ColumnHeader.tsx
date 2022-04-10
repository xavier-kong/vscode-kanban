import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

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
                    <CssTextField
                        label="Enter Column Name"
                        id="custom-css-outlined-input"
                        variant="standard"
                        autoFocus={true}
                        inputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                </Box>
            ) : (
                name
            )}
        </Container>
    );
}

export default ColumnHeader;
