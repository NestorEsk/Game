import { View, Image, Text, StyleSheet} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen ({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>¡GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={require('../assets/images/success.png')}/>
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number {''} <Text style={styles.highlight}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create ({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'raleway',
        fontSize: 24,
        color: Colors.accent500,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'raleway-bold',
        color: Colors.primary600
    }
});