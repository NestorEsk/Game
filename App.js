import { useState } from 'react';
import { StyleSheet,ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState ();
  const [gameIsOver, setGameIsOver] = useState (true);
  const [guessRounds, setGuessRounds] = useState (0);

  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'raleway': require('./assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
  });


  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler (numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler () {
    setUserNumber (null);
    setGuessRounds (0);
  }

  let screen = <StartGameScreen  onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />);
  }



  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <LinearGradient colors={[Colors.primary600, Colors.primaryb600]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.jpg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backGroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.25
  }
});
