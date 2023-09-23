import { useState } from "react"
import { ButtonUser } from "../components/ButtonUser";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export const Header = () => {

  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
        
    </>


  )
}