import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DarkStyledMenu from './DarkStyledMenu';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Columns from '../types/Columns';
import { ClickAwayListener } from '@mui/material';

type Status = 'display' | 'new' | 'rename' | 'hide';

interface PropTypes {
    columns: Columns[];
    setColumnStatus: (status: Status, position: number) => void;
}

const style = {
    color: '#FFF',
    border: 'none',
};

function HiddenColumns({ columns, setColumnStatus }: PropTypes) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ClickAwayListener
            onClickAway={() => {
                handleClose();
            }}
        >
            <Container>
                <Box
                    sx={{
                        border: 0.1,
                        borderColor: 'white',
                        borderRadius: '5%',
                    }}
                >
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={style}
                    >
                        Hidden Columns
                    </Button>
                </Box>
                <DarkStyledMenu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={columns.length > 0 ? open : false}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {columns.map((column) => {
                        return (
                            <MenuItem key={column.position}>
                                <ListItemText
                                    primaryTypographyProps={{
                                        variant: 'body2',
                                    }}
                                >
                                    {column.name}
                                </ListItemText>
                                <ListItemIcon
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColumnStatus(
                                            'display',
                                            column.position
                                        );
                                    }}
                                >
                                    <VisibilityIcon
                                        style={{ color: 'white' }}
                                    />
                                </ListItemIcon>
                            </MenuItem>
                        );
                    })}
                </DarkStyledMenu>
            </Container>
        </ClickAwayListener>
    );
}

export default HiddenColumns;
