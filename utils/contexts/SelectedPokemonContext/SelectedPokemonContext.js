import { createContext, useState } from 'react';

export const SelectedPokemonContext = createContext();

export const SelectedPokemonContextProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const getSelectedPokemon = () => selectedPokemon;

  const saveSelectedPokemon = newPokemon => setSelectedPokemon(newPokemon);

  const clearSelectedPokemon = () => setSelectedPokemon(null);

  const values = {
    getSelectedPokemon,
    saveSelectedPokemon,
    clearSelectedPokemon,
  };

  return (
    <SelectedPokemonContext.Provider value={values}>
      {children}
    </SelectedPokemonContext.Provider>
  );
};
