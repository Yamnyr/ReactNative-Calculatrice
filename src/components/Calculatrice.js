import { StyleSheet, Text, View } from 'react-native';
import Memory from "./Memory";
import Title from "./Title";
import Expression from "./Expression";
import Keyboard from "./Keyboard";
import {useReducer} from "react";
import {reducer, defaultState} from "../reducer";
import {Context} from "../context";
export default function Calculatrice() {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return (
        <View style={styles.Calculatrice}>
            <Context.Provider value={{state, dispatch}}>
                <table>
                    <Title Title={'Ma Calculatrice'}></Title>
                    <Expression></Expression>
                    <Memory></Memory>
                    <Keyboard></Keyboard>
                </table>
            </Context.Provider>
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