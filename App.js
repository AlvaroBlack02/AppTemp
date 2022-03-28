import React, { useState } from 'react';
import { Text,View, StyleSheet,TextInput, TouchableOpacity,} from 'react-native';

export default function App() {
  //Variaveis
  var [C, setC] = useState('');
  var [F, setF] = useState('');

  function CalcularTemperatura() {
    //F=(9*C+160) / 5
    F = (9 * parseFloat(C) + 160) / 5;

    alert('TEMPERATURA em Fahrenheit: ' + F);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Temperatura</Text>

      <TextInput
        style={styles.campo}
        placeholder="Digite uma temp... em celsius"
        keyboardType="numeric"
        onChangeText={(C) => setC(C)}
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularTemperatura}>
        <Text styles={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: '#FFF',
  },

  campo: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
  },

  botao: {
    justifyContent: 'center',
    alignItens: 'center',
    margin: 15,
    backgroundColor: '#BEBEBE',
    padding: 10,
  },

  textoBotao: {
    fontSize: 40,
  },
});

