import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function Expression() {
    return (
        <View style={styles.Expression}>
            <Text style={styles.expression}>Ma Calculatrice</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Expression:{
        backgroundColor:'lightgray'
    },
    expression:{
        margin: 10,
        color:'gray',
        fontSize:20
    }
});