import * as Icons from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const SidebarItem = ({ title, path, icon }) => {
  const navigate = useNavigate();
  const IconComponent = Icons[icon];

  const chnagePage = () => {
    navigate(path);
  }

  return (
    <ListItem onClick={ chnagePage } disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <IconComponent />
            </ListItemIcon>
            <Grid container>
              <Typography variant="p">{title}</Typography>
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
