import { useNavigate } from 'react-router-dom';

export const ButtonUser = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth/login'); // Reemplaza '/login' con la ruta deseada
  };

  return (
    <></>
  )
}
