import { StyleSheet, Text, View } from 'react-native';
import {useContext} from "react";
import {Context} from "../context";
import {addSymbol, memoryClear, memoryRetrieve, memorySave} from "../actions";
import Key from "./Key";
export default function Memory() {
    const state = useContext(Context);
    const { dispatch } = useContext(Context);
    return (
        <View style={styles.ligne}>

                    <Key texte="MS" onPress={() => dispatch(memorySave())} />

                    <Key texte="MC" onPress={() => dispatch(memoryClear())} />

                    <Key disabled={!state.memory} texte="MR" onPress={() => dispatch(memoryRetrieve())} ></Key>

        </View>
    )
}

const styles = StyleSheet.create({
    ligne: {
        flexDirection:"row",
        flexWrap:'wrap',
        margin:'1.5vw'
    },
});