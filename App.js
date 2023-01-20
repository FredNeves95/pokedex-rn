import { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Header } from './src/components/Header';
import { PokemonModal } from './src/screens/PokemonModal';
import { Pokemons } from './src/screens/Pokemons';
import { AppContainer, AppContent } from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import { SelectedPokemonContextProvider } from './utils/contexts/SelectedPokemonContext/SelectedPokemonContext';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = isOpen => {
    setModalVisible(isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <SelectedPokemonContextProvider>
        <AppContainer>
          <StatusBar backgroundColor={theme.colors.secondary} />
          <Header />
          <AppContent>
            <Pokemons handleOpen={handleOpenModal} />
            <PokemonModal isOpen={modalVisible} handleOpen={handleOpenModal} />
          </AppContent>
        </AppContainer>
      </SelectedPokemonContextProvider>
    </ThemeProvider>
  );
};

export default App;
