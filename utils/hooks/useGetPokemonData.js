import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';

export const useGetPokemonData = name => {
  const [pokemonData, setPokemonData] = useState(null);

  const getPokemonData = useCallback(async () => {
    try {
      const response = await api.get(`/pokemon/${name}`);
      setPokemonData(response.data);
    } catch (err) {
      alert(`Ocorreu um erro ao buscar dados do pokemon ${name}`);
    }
  }, [name]);

  useEffect(() => {
    getPokemonData();
  }, [getPokemonData]);

  if (!pokemonData) return null;
  return pokemonData;
};
