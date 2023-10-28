import { Box } from "@mui/material"

export const BoxPincipal = ({ children }) => {
  return (
    <Box
        sx={{
            backgroundColor: '#f0f0f0', // Color de fondo
            padding: 1, // Ajuste de padding
            margin: 1, // Ajuste de margen
            boxShadow: 1,
            borderRadius: 1
        }}
    >
        { children }
    </Box>
  )
}
 