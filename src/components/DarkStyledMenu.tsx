import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';

const DarkStyledMenu = styled(Menu)({
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

export default DarkStyledMenu;
