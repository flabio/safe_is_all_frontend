import{createTheme} from '@mui/material'
import { blue, orange, red } from '@mui/material/colors';

export const theme =createTheme({
    palette:{
        primary:{
            main:blue.A400
        },
        secondary:{
            main:orange.A400
        },
        error:{
            main:red.A400
        }
    }
});