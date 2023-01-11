import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useContext} from "react";
import {Context} from "../context";
export default function Expression() {
    const { state } = useContext(Context);
    return (
        <View style={styles.Expression}>
            <Text style={styles.expression}>{state.expression}</Text>
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
        fontSize:20,
        height:20
    }
});