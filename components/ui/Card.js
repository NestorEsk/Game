import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card ({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create ({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,// only for Android
        shadowColor: 'black', // only for iOS
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,// all of these only for iOS2
    },
});