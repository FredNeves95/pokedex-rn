import styled from 'styled-components/native';

export const AppContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.terciary};
`;

export const AppContent = styled.View`
  padding: 12px;
  padding-bottom: 60px;
`;
