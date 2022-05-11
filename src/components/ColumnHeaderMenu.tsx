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
    const iconStyle = { color: 'white' };
    const menuItems = [
        {
            name: 'Rename',
            icon: <EditIcon style={iconStyle} />,
            onClick: () => handleColumnRename(),
        },
        {
            name: 'Delete',
            icon: <DeleteOutlineIcon style={iconStyle} />,
            onClick: () => handleColumnDelete(),
        },
        {
            name: 'Hide',
            icon: <VisibilityOffIcon style={iconStyle} />,
            onClick: () => handleColumnHide(),
        },
    ];

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
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuList>
                {menuItems.map((item) => {
                    const { name, icon, onClick } = item;
                    return (
                        <MenuItem
                            onClick={(e) => {
                                e.preventDefault();
                                onClick();
                            }}
                        >
                            <ListItemText
                                primaryTypographyProps={{ variant: 'body2' }}
                            >
                                {name}
                            </ListItemText>
                            <ListItemIcon>{icon}</ListItemIcon>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </DarkStyledMenu>
    );
}

export default ColumnHeaderMenu;
