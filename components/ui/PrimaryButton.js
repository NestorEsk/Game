import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}) {
    return (            
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={onPress}>
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable> 
        </View>
    )
}

export default PrimaryButton;
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary700,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 8,
        margin: 4,
        elevation: 2
    },
    buttonText:{
        fontFamily: 'raleway-bold',
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.50,
    }
});