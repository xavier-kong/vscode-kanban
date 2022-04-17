import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import WhiteCssTextField from './WhiteCssTextField';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

interface propTypes {
    name: string;
    status: string;
    setColumnName: Function;
    displayIcon: boolean;
}

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
                        <WhiteCssTextField
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
                    {displayIcon ? (
                        <IconButton aria-label="delete">
                            <MoreVertIcon />
                        </IconButton>
                    ) : null}
                </Box>
            )}
        </Container>
    );
}

export default ColumnHeader;
