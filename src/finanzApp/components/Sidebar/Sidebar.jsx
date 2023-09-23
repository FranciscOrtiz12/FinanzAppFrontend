import { Avatar, Box, Divider, Drawer, List, Toolbar, Typography, alpha } from "@mui/material"
import configRoutes from './config';
import { SidebarItem } from "./SidebarItem";
import styled from "@emotion/styled";
import { deepOrange } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserImage } from "../ui";

const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
  }));

export const Sidebar = ({ drawerWidth }) => {
    const { displayName, photoURL } = useSelector( state => state.auth );
    const navigate = useNavigate();

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >

            <Toolbar sx={{ mb: 5}} >
                <Box onClick={() => navigate('/') } style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <img src="/logo.png" alt="Logo de mi aplicación" style={{ maxWidth: '60px', marginRight: '10px' }} />
                    <Typography variant="p" sx={{ textDecoration: 'none', color: 'inherit' }}>FinanzApp</Typography>
                </Box>
            </Toolbar>

            <List> {/* LISTA DE NOTAS */}
                { configRoutes.map( route => <SidebarItem key={route.path} { ...route } />) }
            </List>

            <Box sx={{ mb: 5, mx: 2.5, marginTop: 'auto' }}>
                <StyledAccount>

                    <UserImage />


                    <Box sx={{ ml: 2 }}>
                    <Typography variant="caption" sx={{ color: 'text.primary' }}>
                        { displayName }
                    </Typography>
                    </Box>
                </StyledAccount>
            </Box>

        </Drawer>

    </Box>
  )
}
