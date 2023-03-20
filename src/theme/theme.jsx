import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#0d47a1',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#388e3c',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default theme;
