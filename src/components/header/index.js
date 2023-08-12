import React from 'react';
import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react';
import { goToFeedPage, goToLoginPage } from '../../routes';
import { useNavigate } from 'react-router-dom';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const buttonAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem('cookenu.token');
      setIsLoggedIn(false);
    }
    goToLoginPage(navigate);
  };

  const buttonText = isLoggedIn ? 'Logout' : 'Login';

  return (
    <HeaderStyled>
      <Button onClick={() => goToFeedPage(navigate)} variant="ghost">
        Cookenu
      </Button>
      <Button onClick={buttonAction} variant="ghost">
        {buttonText}
      </Button>
    </HeaderStyled>
  );
};
