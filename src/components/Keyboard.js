import { StyleSheet, Text, View } from 'react-native';
import Key from "./Key";
import {Context} from "../context";
import {useContext} from "react";
import {addSymbol, allClear, clear, equalSymbol} from "../actions";
import evaluateur from "../reducer/evaluateur";
export default function Keyboard() {
    const { dispatch } = useContext(Context);
    return (
        <View style={styles.keyboard}>
            <tbody style={{marginTop:'10px'}}>
                <tr>
                    <td>
                        <Key texte="7" onPress={() => dispatch(addSymbol("7"))} />
                    </td>
                    <td>
                        <Key texte="8" onPress={() => dispatch(addSymbol("8"))} />
                    </td>
                    <td>
                        <Key texte="9" onPress={() => dispatch(addSymbol("9"))} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte="4" onPress={() => dispatch(addSymbol("4"))} />
                    </td>
                    <td>
                        <Key texte="5" onPress={() => dispatch(addSymbol("5"))} />
                    </td>
                    <td>
                        <Key texte="6" onPress={() => dispatch(addSymbol("6"))} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte="1" onPress={() => dispatch(addSymbol("1"))} />
                    </td>
                    <td>
                        <Key texte="2" onPress={() => dispatch(addSymbol("2"))} />
                    </td>
                    <td>
                        <Key texte="3" onPress={() => dispatch(addSymbol("3"))} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte="0" onPress={() => dispatch(addSymbol("0"))} />
                    </td>
                    <td>
                        <Key texte="AC" onPress={() => dispatch(allClear())} />
                    </td>
                    <td>
                        <Key texte="C" onPress={() => dispatch(clear())} />
                    </td>
                </tr>
            </tbody>
            <tfoot style={{marginTop:'10px'}}>
                <tr>
                    <td>
                        <Key texte="%" onPress={() => dispatch(addSymbol("%"))} />
                    </td>
                    <td>
                        <Key texte="/" onPress={() => dispatch(addSymbol("/"))} />
                    </td>
                    <td>
                        <Key texte="X" onPress={() => dispatch(addSymbol("*"))} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte="-" onPress={() => dispatch(addSymbol("-"))} />
                    </td>
                    <td>
                        <Key texte="+" onPress={() => dispatch(addSymbol("+"))} />
                    </td>
                    <td>
                        <Key texte="=" onPress={() => dispatch(equalSymbol())} />
                    </td>
                </tr>
            </tfoot>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width:'33vw',
        height:'5vh'
    },
});
