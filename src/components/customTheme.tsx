import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
        danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
        danger?: string;
        };
    } 
}

const customTheme = createTheme({

    typography: {
        fontFamily: "Montserrat",
        fontSize: 22,
    },

})

export default customTheme