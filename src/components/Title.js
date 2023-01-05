import { StyleSheet, Text, View } from 'react-native';
export default function Title(Title) {
    return (
        <View style={styles.Title}>
            <Text style={styles.title}>Ma Calculatrice</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        backgroundColor: 'orange',
        textAlign: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: 'white'
    }
});