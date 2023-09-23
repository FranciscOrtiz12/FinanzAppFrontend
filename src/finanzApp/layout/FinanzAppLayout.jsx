import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components";
import { Sidebar } from "../components/Sidebar/Sidebar";

const drawerWidth = 240;

export const FinanzAppLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

      <NavBar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        { children }
      </Box>

    </Box>
  )
}
