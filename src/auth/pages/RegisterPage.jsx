import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyErrorMessage, startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ ( value ) => value.includes('@'), 'El correo debe tener un @'],
  password: [ ( value ) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    
    if( [displayNameValid, emailValid, passwordValid].some( validation => validation != null ) ){
      if( passwordValid != null ) dispatch(modifyErrorMessage('La contraseña es obligatoria y debe contener al menos 6 caracteres'));
      if( emailValid != null ) dispatch(modifyErrorMessage("El email es obligatorio y debe contener un '@'"));
      if( displayNameValid != null ) dispatch(modifyErrorMessage('El nombre del usuario es obligatorio'));
      return;
    }
    dispatch( startCreatingUserWithEmailPassword({ displayName, email, password, photoUrl: '' }) )
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre de Usuario" 
                type="text" 
                placeholder='Nombre de Usuario' 
                fullWidth
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
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
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
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
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item 
                xs={ 12 }
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert 
                  severity='error'
                >
                  { errorMessage }
                </Alert>
              </Grid>

              <Grid item xs={ 12 }>
                <Button 
                  variant='contained'
                  fullWidth
                  type='submit'
                  disable={ isCheckingAuthentication }
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
