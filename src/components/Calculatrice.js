import { StyleSheet, Text, View } from 'react-native';
import Memory from "./Memory";
import Title from "./Title";
import Expression from "./Expression";
import Keyboard from "./Keyboard";
export default function Calculatrice() {
    return (
        <View style={styles.Calculatrice}>
            <table>
                <Title></Title>
                <Expression></Expression>
                <Memory></Memory>
                <Keyboard></Keyboard>
            </table>
        </View>
    )
}

const styles = StyleSheet.create({
    calculatrice: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});