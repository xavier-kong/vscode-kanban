import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface PropTypes {
    onClick: () => void;
    name: string;
    icon: any;
}

function ColumnHeaderMenuItem({ onClick, name, icon }: PropTypes) {
    return (
        <MenuItem
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {name}
            </ListItemText>
            <ListItemIcon>{icon}</ListItemIcon>
        </MenuItem>
    );
}

export default ColumnHeaderMenuItem;
