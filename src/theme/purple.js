import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#AAD401' // Cambia el valor alfa (0.5 es semitransparente)
        },
        secondary: {
            main: '#543883'
        },
        error:{
            main: red.A400
        }
    }
})