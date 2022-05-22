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

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

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
        <Container
            sx={{
                marginTop: '10px',
                borderBottom:
                    status === 'new' || status === 'rename'
                        ? null
                        : '1px solid',
                borderColor:
                    status === 'new' || status === 'rename' ? null : 'white',
            }}
        >
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
                                value={input}
                                autoFocus={true}
                                variant="standard"
                                onKeyPress={onKeyPress}
                                label="Enter Column Name"
                                helperText="Please enter a valid name."
                                inputProps={{
                                    style: { color: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: '#fff' },
                                }}
                                onChange={(event) => {
                                    setInput(event.target.value);
                                }}
                            />
                        ) : (
                            <WhiteCssTextField
                                value={input}
                                autoFocus={true}
                                variant="standard"
                                onKeyPress={onKeyPress}
                                label="Enter Column Name"
                                inputProps={{
                                    style: { color: 'white' },
                                }}
                                InputLabelProps={{
                                    style: { color: '#fff' },
                                }}
                                onChange={(event) => {
                                    setInput(event.target.value);
                                }}
                            />
                        )}
                    </ClickAwayListener>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            marginTop: '3%',
                            marginBottom: '7%',
                        }}
                    >
                        {name}
                    </Typography>
                    {displayIcon ? (
                        <div>
                            <IconButton
                                size="medium"
                                aria-haspopup="true"
                                onClick={handleClick}
                                sx={{ color: '#fff' }}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <MoreHorizIcon />
                            </IconButton>
                            <ColumnHeaderMenu
                                open={open}
                                position={position}
                                anchorEl={anchorEl}
                                handleClose={handleClose}
                                deleteColumn={deleteColumn}
                                setColumnStatus={setColumnStatus}
                            />
                        </div>
                    ) : null}
                </Box>
            )}
        </Container>
    );
}

export default ColumnHeader;
