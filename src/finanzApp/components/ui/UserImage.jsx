import { Avatar, IconButton, alpha } from "@mui/material"
import { deepOrange } from "@mui/material/colors";
import { useSelector } from "react-redux";

export const UserImage = () => {
    const { displayName, photoURL } = useSelector( state => state.auth );

    return (
        <IconButton
            sx={{ p: 0 }}
            >
                <Avatar 
                    sx={{ bgcolor: deepOrange[500] }}
                    src={ (photoURL.length > 0) ? photoURL : null  } 
                >
                        { displayName[0]}
                </Avatar>
        </IconButton>
    )
}
