import { StyleSheet, Text, View } from 'react-native';
import Key from "./Key";
import {Context} from "../context";
import {useContext} from "react";
import {addSymbol, allClear, clear, equalSymbol} from "../actions";
import evaluateur from "../reducer/evaluateur";
export default function Keyboard() {
    const { dispatch } = useContext(Context);
    return (
        <View style={styles.ligne}>
            <Key texte="7" onPress={() => dispatch(addSymbol("7"))} />
            <Key texte="8" onPress={() => dispatch(addSymbol("8"))} />
            <Key texte="9" onPress={() => dispatch(addSymbol("9"))} />

            <Key texte="4" onPress={() => dispatch(addSymbol("4"))} />
            <Key texte="5" onPress={() => dispatch(addSymbol("5"))} />
            <Key texte="6" onPress={() => dispatch(addSymbol("6"))} />

            <Key texte="1" onPress={() => dispatch(addSymbol("1"))} />
            <Key texte="2" onPress={() => dispatch(addSymbol("2"))} />
            <Key texte="3" onPress={() => dispatch(addSymbol("3"))} />

            <Key texte="0" onPress={() => dispatch(addSymbol("0"))} />
            <Key texte="AC" onPress={() => dispatch(allClear())} />
            <Key texte="C" onPress={() => dispatch(clear())} />

            <Key texte="%" onPress={() => dispatch(addSymbol("%"))} />
            <Key texte="/" onPress={() => dispatch(addSymbol("/"))} />
            <Key texte="X" onPress={() => dispatch(addSymbol("x"))} />

            <Key texte="-" onPress={() => dispatch(addSymbol("-"))} />
            <Key texte="+" onPress={() => dispatch(addSymbol("+"))} />
            <Key texte="=" onPress={() => dispatch(equalSymbol())} />
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
