import { HeaderContainer, Logo } from './styles';
import logo from '../../../assets/images/logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo source={logo} alt="Pokemon Logo" resizeMode="contain" />
    </HeaderContainer>
  );
};
