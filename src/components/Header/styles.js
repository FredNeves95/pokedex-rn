import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  height: 60px;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 40px;
`;
