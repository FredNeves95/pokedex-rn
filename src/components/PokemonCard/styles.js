import styled from 'styled-components/native';

export const PokemonCardContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  height: 100px;
  width: 80%;
  margin: 12px auto;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
`;

export const PokemonCardImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const PokemonCardName = styled.Text`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
`;
