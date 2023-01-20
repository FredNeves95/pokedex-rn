import styled from 'styled-components/native';

export const ModalContent = styled.View`
  height: 100%;
  padding: 12px;
  display: flex;
  background-color: ${props => props.theme.colors.terciary};
`;

export const CloseModalButtonContainer = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const CloseModalButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
`;

export const CloseModalButtonText = styled.Text`
  font-size: ${props => props.theme.fontSizes.xl};
  color: red;
  font-weight: bold;
`;

export const PokemonImagesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const PokemonImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const PokemonName = styled.Text`
  font-size: ${props => props.theme.fontSizes.xl};
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin: 0 auto;
`;

export const GenderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GenderImage = styled.Image`
  height: 30px;
  width: 30px;
`;

export const Description = styled.View`
  display: flex;
  align-items: center;
  margin: 50px auto;
  width: 50%;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.8;
  border-radius: 10px;
  padding: 12px;
`;

export const Type = styled.Text`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  text-transform: capitalize;
  color: ${props => {
    const type = props.type;
    return props.theme.colors[type];
  }};
`;
