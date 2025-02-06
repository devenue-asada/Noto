'use client';
import { createTheme } from '@mui/material/styles';

// muiのカスタム
const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)'
    },
    palette: {
        primary: {
            main: '#1976d2',
            light: '#edf3fe',
            dark: '#1565c0'
        }
    }
});

export default theme;
