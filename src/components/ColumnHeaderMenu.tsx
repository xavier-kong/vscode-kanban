import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { PopoverProps } from '@mui/material/Popover';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import DarkStyledMenu from './DarkStyledMenu';

interface PropTypes {
    anchorEl: PopoverProps['anchorEl'];
    open: boolean;
    handleClose: PopoverProps['onClose'];
    deleteColumn: Function;
    setColumnStatus: Function;
    position: number;
}

function ColumnHeaderMenu({
    anchorEl,
    open,
    handleClose,
    deleteColumn,
    setColumnStatus,
    position,
}: PropTypes) {
    function handleColumnRename() {
        setColumnStatus('rename', position);
    }
    function handleColumnDelete() {
        deleteColumn(position);
    }
    function handleColumnHide() {
        setColumnStatus('hide', position);
    }

    return (
        <DarkStyledMenu
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
        </DarkStyledMenu>
    );
}

export default ColumnHeaderMenu;
