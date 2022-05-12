import MenuList from '@mui/material/MenuList';
import { PopoverProps } from '@mui/material/Popover';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import DarkStyledMenu from './DarkStyledMenu';
import ColumnHeaderMenuItem from './ColumnHeaderMenuItem';

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
                    return (
                        <ColumnHeaderMenuItem
                            name={item.name}
                            icon={item.icon}
                            onClick={item.onClick}
                        />
                    );
                })}
            </MenuList>
        </DarkStyledMenu>
    );
}

export default ColumnHeaderMenu;
