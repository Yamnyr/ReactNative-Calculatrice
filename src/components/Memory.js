import { StyleSheet, Text, View } from 'react-native';
export default function Memory() {
    return (
        <View style={styles.Memory}>
            <thead style={{marginTop:'10px'}}>
            <tr>
                <td><button style={styles.button}>MS</button></td><td><button style={styles.button}>mc</button></td><td><button style={styles.button}>mr</button></td>
            </tr>
            </thead>
        </View>
    )
}

const styles = StyleSheet.create({
    Memory: {
        textAlign: 'center',
    },
    button: {
        width:'32vw',
        height:'5vh'
    },
});