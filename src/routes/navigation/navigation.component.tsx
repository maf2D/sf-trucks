import { Outlet } from 'react-router-dom';
import Logo from '@/assets/logo.svg?react';
import { LogoContainer, NavigationContainer, NavLink, NavLinks }
  from './navigation.styles';

const Navigation = () => (
  <>
    <NavigationContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>

      <NavLinks>
        <NavLink to='/about'>About</NavLink>
      </NavLinks>
    </NavigationContainer>

    <Outlet />
  </>
);

export default Navigation;
