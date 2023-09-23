import { Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography, alpha } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { UserImage } from "../index";

export const AccountPopover = () => {
    const { displayName, photoURL } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpen(null);
    };

    const onLogout = () => {
      dispatch(startLogout());
    }
  
    return (
      <>
        <Box 
          onClick={handleOpen}
          sx={{
            p: 0,
            ...(open && {
              '&:before': {
                  zIndex: 1,
                  content: "''",
                  borderRadius: '50%',
                  position: 'absolute',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.1),
              },
            })
          }}
        >
          <UserImage />
        </Box>
  
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1.5,
              ml: 0.75,
              width: 180,
              '& .MuiMenuItem-root': {
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5, }}>
            <Typography variant="subtitle2" noWrap>
              { displayName }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {/* Ortiz */}
            </Typography>
          </Box>
  
          <Divider sx={{ borderStyle: 'dashed' }} />
  
          <Stack sx={{ p: 1 }}>
              <MenuItem key={1} onClick={(handleClose)}>
                opcion
              </MenuItem>
            
          </Stack>
  
          <Divider sx={{ borderStyle: 'dashed' }} />
  
          <MenuItem onClick={onLogout} sx={{ m: 1 }}>
            Cerrar Sesión
          </MenuItem>
        </Popover>
      </>
    );
}
