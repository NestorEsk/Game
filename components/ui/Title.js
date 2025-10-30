import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


function Title ({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create ({
    title: {
        fontFamily:'raleway-bold',
        fontSize: 32,
        color: Colors.accent500,
        textAlign: 'center',
        padding: 12,
    }
})