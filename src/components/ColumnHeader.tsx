import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import WhiteCssTextField from './WhiteCssTextField';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import ColumnHeaderMenu from './ColumnHeaderMenu';

interface PropTypes {
    name: string;
    status: string;
    setColumnName: Function;
    deleteColumn: Function;
    setColumnStatus: Function;
    displayIcon: boolean;
    position: number;
}

function ColumnHeader({
    name,
    status,
    position,
    setColumnName,
    displayIcon,
    deleteColumn,
    setColumnStatus,
}: PropTypes) {
    const [input, setInput] = useState('');
    const [anchorEl, setAnchorEl] = useState<any | null>(null);
    const [inputError, setInputError] = useState(false);

    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function checkForInputError() {
        if (input === '' || input === ' ') {
            setInputError(true);
        } else {
            setInputError(false);
        }
    }

    function onKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkForInputError();
            setColumnName(input, position);
        }
    }

    return (
        <Container sx={{ marginTop: '10px' }}>
            {status === 'new' || status === 'rename' ? (
                <Box component="form" noValidate autoComplete="off">
                    <ClickAwayListener
                        onClickAway={() => {
                            checkForInputError();
                            setColumnName(input, position);
                        }}
                    >
                        {inputError ? (
                            <WhiteCssTextField
                                error
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
                                helperText="Please enter a valid name."
                            />
                        ) : (
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
                        )}
                    </ClickAwayListener>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ marginTop: '5%' }}>{name}</Typography>
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
                                <MoreHorizIcon />
                            </IconButton>
                            <ColumnHeaderMenu
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose}
                                deleteColumn={deleteColumn}
                                setColumnStatus={setColumnStatus}
                                position={position}
                            />
                        </div>
                    ) : null}
                </Box>
            )}
        </Container>
    );
}

export default ColumnHeader;
