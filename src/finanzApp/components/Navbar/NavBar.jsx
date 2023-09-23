import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { AccountPopover } from "./AccountPopover"

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar 
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}
    >
        <Toolbar>
        <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='end' alignItems='center'>

                <IconButton color="error">
                    {/* <LogoutOutlined /> */}
                    <AccountPopover></AccountPopover>
                </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
