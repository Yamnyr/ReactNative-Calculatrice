import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculatrice from "./src/components/Calculatrice";
export default function App() {
  return (
    <View style={styles.App}>
        <Calculatrice></Calculatrice>
    </View>
  );
}

const styles = StyleSheet.create({
    App:{
        marginLeft: 0,
    }
});