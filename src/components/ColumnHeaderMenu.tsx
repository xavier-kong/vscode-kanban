import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { PopoverProps } from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';

interface PropTypes {
    anchorEl: PopoverProps['anchorEl'];
    open: boolean;
    handleClose: PopoverProps['onClose'];
    deleteColumn: Function;
    position: number;
}

const StyledMenu = styled(Menu)({
    '.MuiMenu-paper': {
        backgroundColor: '#1e1e1e',
        width: '20%',
        maxWidth: '200px',
    },
    '.MuiMenu-root': {
        backgroundColor: '#1e1e1e',
    },
    '.MuiMenu-list': {
        backgroundColor: '#1e1e1e',
        color: 'white',
    },
});

function ColumnHeaderMenu({
    anchorEl,
    open,
    handleClose,
    deleteColumn,
    position,
}: PropTypes) {
    function handleColumnRename() {}
    function handleColumnDelete() {
        deleteColumn(position);
    }
    function handleColumnHide() {}

    return (
        <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuList>
                <MenuItem
                    onClick={(e) => {
                        e.preventDefault();
                        handleColumnRename();
                    }}
                >
                    <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                        Rename
                    </ListItemText>
                    <ListItemIcon>
                        <EditIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem
                    onClick={(e) => {
                        e.preventDefault();
                        handleColumnDelete();
                    }}
                >
                    <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                        Delete
                    </ListItemText>
                    <ListItemIcon>
                        <DeleteOutlineIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                </MenuItem>
                <MenuItem
                    onClick={(e) => {
                        e.preventDefault();
                        handleColumnHide();
                    }}
                >
                    <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                        Hide
                    </ListItemText>
                    <ListItemIcon>
                        <VisibilityOffIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                </MenuItem>
            </MenuList>
        </StyledMenu>
    );
}

export default ColumnHeaderMenu;
