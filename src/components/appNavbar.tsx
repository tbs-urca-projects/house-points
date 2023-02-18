import { AppBar, Toolbar, Typography } from '@mui/material';
import React from "react";

const AppNavBar = () => {
    
    return (
        <AppBar position="static" style={{ backgroundColor: "rgba(43,45,125,0.98)"}}>
            <Toolbar variant="dense">
                <Typography>House Points - Urca</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavBar