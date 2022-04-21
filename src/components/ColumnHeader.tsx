import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import WhiteCssTextField from './WhiteCssTextField';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import ColumnHeaderMenu from './ColumnHeaderMenu';

interface PropTypes {
    name: string;
    status: string;
    setColumnName: Function;
    displayIcon: boolean;
}

function ColumnHeader({ name, status, setColumnName, displayIcon }: PropTypes) {
    const [input, setInput] = useState('');
    const [anchorEl, setAnchorEl] = useState<any | null>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {name}
                    {displayIcon ? (
                        <div>
                            <IconButton
                                sx={{ color: '#fff' }}
                                size="medium"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <ColumnHeaderMenu
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose}
                            />
                        </div>
                    ) : null}
                </Box>
            )}
        </Container>
    );
}

export default ColumnHeader;
