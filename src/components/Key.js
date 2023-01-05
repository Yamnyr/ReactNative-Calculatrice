import { StyleSheet, Text, View } from 'react-native';
import Keyboard from "./Keyboard";
export default function Key(props) {
    return (
        <View>
            <button style={styles.button}>{props.texte}</button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width:'32vw',
        height:'5vh'
    },
});