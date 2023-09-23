import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { modifyErrorMessage, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { Loading } from '../../ui/Loading';


const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth );
  const { formState, email, password, onInputChange } = useForm( formData );
  const isAuthenticating = useMemo( () => ( status === 'checking' || status === 'not-authenticated' ) ? false : true, [ status ]);

  const onSubmit = ( event ) => {
    event.preventDefault();

    if( email.length < 1 || password.length < 1 ) {
      dispatch(modifyErrorMessage('Por favor, ingrese su correo electronico y contraseña'));
      return;
    };

    dispatch( startLoginWithEmailPassword({ email, password }) );
  }


  const onGoogleSignIn = () => {
    // dispatch( startGoogleSignIn() );
  }

  return (
    <AuthLayout title="Iniciar Sesión">

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster' >
          <Grid container>

            <Grid item 
                xs={ 12 }
                display={ !!errorMessage ? '' : 'none' }
              >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  disabled={ isAuthenticating || password.length < 6 }
                  variant='contained'
                  fullWidth
                  type='submit'
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  disabled={ isAuthenticating }
                  variant='contained' 
                  fullWidth
                  onClick={ onGoogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
