import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';

export const useGetPokemons = ({ limit = null, offset = null }) => {
  const [pokemons, setPokemons] = useState(null);

  const handleEndPoint = () => {
    const BASE_ENDPOINT = 'pokemon';
    if (limit && offset) {
      return `${BASE_ENDPOINT}?offset=${offset}&limit=${limit}`;
    }

    if (limit) {
      return `${BASE_ENDPOINT}?limit=${limit}`;
    }

    if (offset) {
      return `${BASE_ENDPOINT}?offset=${offset}`;
    }

    return `${BASE_ENDPOINT}`;
  };

  const getPokemons = useCallback(async () => {
    try {
      const response = await api.get(handleEndPoint());
      setPokemons(response.data.results);
    } catch (error) {
      alert(error);
    }
  }, [limit, offset]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  if (!pokemons) return null;

  return pokemons;
};
