import { useContext, useState } from 'react';
import { Modal, Switch } from 'react-native';
import { ThemeContext } from 'styled-components';
import {
  ModalContent,
  CloseModalButtonContainer,
  CloseModalButton,
  CloseModalButtonText,
  PokemonImagesContainer,
  PokemonImage,
  PokemonName,
  GenderImage,
  GenderContainer,
  Type,
  Description,
} from './styles';

import male from '../../../assets/icons/male.png';
import female from '../../../assets/icons/female.png';

import { SelectedPokemonContext } from '../../../utils/contexts/SelectedPokemonContext/SelectedPokemonContext';

export const PokemonModal = ({ isOpen, handleOpen }) => {
  const { getSelectedPokemon, clearSelectedPokemon } = useContext(
    SelectedPokemonContext,
  );

  const theme = useContext(ThemeContext);

  const [gender, setGender] = useState('male');

  const pokemon = getSelectedPokemon();

  if (!pokemon) {
    return null;
  }

  const handleCloseModal = () => {
    handleOpen(false);
    clearSelectedPokemon();
  };

  const handleToggle = () => {
    if (gender === 'male') {
      setGender('female');
      return;
    }

    setGender('male');
  };

  const isMale = gender === 'male';
  const hasFemaleVersion =
    pokemon.sprites.front_female && pokemon.sprites.back_female;

  const renderChooseGender = () => {
    return (
      <GenderContainer>
        <GenderImage source={female} />
        <Switch
          trackColor={{ false: theme.colors.female, true: theme.colors.male }}
          thumbColor={isMale ? theme.colors.male : theme.colors.female}
          value={isMale}
          onValueChange={handleToggle}
        />
        <GenderImage source={male} />
      </GenderContainer>
    );
  };

  const frontImage = isMale
    ? pokemon.sprites.front_default
    : pokemon.sprites.front_female;

  const backImage = isMale
    ? pokemon.sprites.back_default
    : pokemon.sprites.back_female;

  return (
    <Modal visible={isOpen} animationType="fade">
      <ModalContent>
        <ModalContent>
          <CloseModalButtonContainer>
            <CloseModalButton onPress={handleCloseModal}>
              <CloseModalButtonText>X</CloseModalButtonText>
            </CloseModalButton>
          </CloseModalButtonContainer>

          <PokemonImagesContainer>
            <PokemonImage source={{ uri: frontImage }} />
            <PokemonImage source={{ uri: backImage }} />
          </PokemonImagesContainer>
          <PokemonName>{pokemon.name}</PokemonName>
          {hasFemaleVersion && renderChooseGender()}
          <Description>
            {pokemon.types.map(({ type }, index) => (
              <Type key={index} type={type.name}>
                {type.name}
              </Type>
            ))}
          </Description>
        </ModalContent>
      </ModalContent>
    </Modal>
  );
};
