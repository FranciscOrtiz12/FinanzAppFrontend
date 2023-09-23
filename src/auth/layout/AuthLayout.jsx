import { Box, Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundImage: `url('/backgroudAuth.jpeg')`, padding: 4 }}
    >

      <Grid item
       xs={ 3 }
       sx={{ 
            boxShadow: 3,
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: .70
        }}>
          <Box textAlign={'center'} >
            <img src="/logo.png" alt="Logo de mi aplicación" style={{ maxWidth: '100px', marginRight: '10px' }} />
            <Typography variant='h5' sx={{ mb: 1, justifyContent: 'center' }}>{ title }</Typography>
          </Box>
            { children }

      </Grid>

    </Grid>

  )
}
