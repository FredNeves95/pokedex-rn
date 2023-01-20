import { useContext, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SelectedPokemonContext } from '../../../utils/contexts/SelectedPokemonContext/SelectedPokemonContext';
import { useGetPokemonData } from '../../../utils/hooks/useGetPokemonData';
import {
  PokemonCardContainer,
  PokemonCardImage,
  PokemonCardName,
} from './styles';

export const PokemonCard = ({ name, handleLoading, handleOpen }) => {
  const pokemonData = useGetPokemonData(name);

  const { saveSelectedPokemon } = useContext(SelectedPokemonContext);

  useEffect(() => {
    if (!pokemonData) {
      handleLoading(true);
    }
    if (pokemonData) {
      handleLoading(false);
    }
  }, [pokemonData]);

  if (!pokemonData) {
    return <></>;
  }

  const handlePress = () => {
    saveSelectedPokemon(pokemonData);
    handleOpen(true);
  };

  return (
    <PokemonCardContainer onPress={handlePress}>
      <PokemonCardImage
        source={{
          uri: pokemonData.sprites.front_default,
        }}
      />
      <PokemonCardName>{name}</PokemonCardName>
    </PokemonCardContainer>
  );
};
