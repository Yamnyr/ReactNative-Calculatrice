import { StyleSheet, Text, View } from 'react-native';
import Key from "./Key";
export default function Keyboard() {
    return (
        <View style={styles.keyboard}>
            <tbody style={{marginTop:'10px'}}>
                <tr>
                    <td>
                        <Key texte={'7'}></Key>
                    </td>
                    <td>
                        <Key texte={'8'}></Key>
                    </td>
                    <td>
                        <Key texte={'9'}></Key>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte={'4'}></Key>
                    </td>
                    <td>
                        <Key texte={'5'}></Key>
                    </td>
                    <td>
                        <Key texte={'6'}></Key>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte={'1'}></Key>
                    </td>
                    <td>
                        <Key texte={'2'}></Key>
                    </td>
                    <td>
                        <Key texte={'3'}></Key>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte={'0'}></Key>
                    </td>
                    <td>
                        <Key texte={'AC'}></Key>
                    </td>
                    <td>
                        <Key texte={'C'}></Key>
                    </td>
                </tr>
            </tbody>
            <tfoot style={{marginTop:'10px'}}>
                <tr>
                    <td>
                        <Key texte={'%'}></Key>
                    </td>
                    <td>
                        <Key texte={'/'}></Key>
                    </td>
                    <td>
                        <Key texte={'X'}></Key>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Key texte={'-'}></Key>
                    </td>
                    <td>
                        <Key texte={'+'}></Key>
                    </td>
                    <td>
                        <Key texte={'='}></Key>
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
