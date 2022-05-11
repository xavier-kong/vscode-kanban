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
                {[
                    {
                        name: 'Rename',
                        icon: <EditIcon style={iconStyle} />,
                        onClick: () => {
                            return handleColumnRename();
                        },
                    },
                    {
                        name: 'Delete',
                        icon: <DeleteOutlineIcon style={iconStyle} />,
                        onClick: handleColumnDelete(),
                    },
                    {
                        name: 'Hide',
                        icon: <VisibilityOffIcon style={iconStyle} />,
                        onClick: handleColumnHide(),
                    },
                ].map((item) => (
                    <MenuItem
                        onClick={(e) => {
                            e.preventDefault();
                            item.onClick;
                        }}
                    >
                        <ListItemText
                            primaryTypographyProps={{ variant: 'body2' }}
                        >
                            {item.name}
                        </ListItemText>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                    </MenuItem>
                ))}
            </MenuList>
        </DarkStyledMenu>
    );
}

export default ColumnHeaderMenu;
