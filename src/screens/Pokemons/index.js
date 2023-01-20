import { useState, useContext } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { useGetPokemons } from '../../../utils/hooks/useGetPokemons';
import { PokemonCard } from '../../components/PokemonCard';

export const Pokemons = ({ handleOpen }) => {
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const pokemons = useGetPokemons({ offset: '', limit: '' });

  const handleLoading = loading => {
    setIsLoading(loading);
  };

  const renderLoading = () => {
    return <ActivityIndicator color={theme.colors.primary} size="large" />;
  };

  const handleRender = () => {
    return (
      <>
        {isLoading && renderLoading()}
        <FlatList
          data={pokemons}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          renderItem={({ item }) => {
            const { name } = item;
            return (
              <PokemonCard
                name={name}
                handleLoading={handleLoading}
                handleOpen={handleOpen}
              />
            );
          }}
        />
      </>
    );
  };

  return <View>{handleRender()}</View>;
};
