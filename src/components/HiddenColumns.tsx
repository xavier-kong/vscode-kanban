import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface Column {
    name: string;
    default: boolean;
    status: 'display' | 'new' | 'rename' | 'hide';
    position: number;
    tasks: never[];
}

interface PropTypes {
    columns: Column[];
}

const style = {
    color: '#FFF',
    border: 'none',
};

function HiddenColumns({ columns }: PropTypes) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
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
            <Menu
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
                        <MenuItem key={column.position}>{column.name}</MenuItem>
                    );
                })}
            </Menu>
        </Container>
    );
}

export default HiddenColumns;
