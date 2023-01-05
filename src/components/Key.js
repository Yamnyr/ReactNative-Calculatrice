import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Keyboard from "./Keyboard";
export default function Key(props) {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.button}
            >
                <Text>{props.texte}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: '32vw'
    },
});