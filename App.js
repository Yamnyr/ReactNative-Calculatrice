import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.Calculatrice}>
      <View style={styles.Title}>
        <Text style={styles.title}>Ma Calculatrice</Text>
      </View>
      <View style={styles.Expression}>
        <Text style={styles.expression}>Ma Calculatrice</Text>
      </View>
        <table style={{borderSpacing:'unset', borderCollapse:'unset', marginTop:'10px'}}>
            <View style={styles.Memory}>
                <thead style={{marginTop:'10px'}}>
                    <tr>
                        <td><button style={styles.button}>MS</button></td><td><button style={styles.button}>mc</button></td><td><button style={styles.button}>mr</button></td>
                    </tr>
                </thead>
            </View>
            <View style={styles.keyboard}>
                <tbody>
                    <tr>
                        <td><button style={styles.button} >7</button></td><td><button style={styles.button}>8</button></td><td><button style={styles.button}>9</button></td>
                    </tr>
                    <tr>
                        <td><button style={styles.button}>4</button></td><td><button style={styles.button}>5</button></td><td><button style={styles.button}>6</button></td>
                    </tr>
                    <tr>
                        <td><button style={styles.button}>1</button></td><td><button style={styles.button}>2</button></td><td><button style={styles.button}>3</button></td>
                    </tr>
                    <tr>
                        <td><button style={styles.button}>0</button></td><td><button style={styles.button}>AC</button></td><td><button style={styles.button}>C</button></td>
                    </tr>
                </tbody>
                <tfoot style={{marginTop:'10px'}}>
                    <tr>
                        <td><button style={styles.button}>%</button></td><td><button style={styles.button}>/</button></td><td><button style={styles.button}>X</button></td>
                    </tr>
                    <tr>
                        <td><button style={styles.button}>-</button></td><td><button style={styles.button}>+</button></td><td><button style={styles.button}>=</button></td>
                    </tr>
                </tfoot>
            </View>
        </table>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  calculatrice: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    Title: {
      backgroundColor:'orange',
        textAlign: 'center',
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color:'white'
    },
    Expression:{
      backgroundColor:'lightgray'
    },
    expression:{
      margin: 10,
      color:'gray',
      fontSize:20
    },
    button: {
      width:'33vw',
        height:'5vh'
    },
});
