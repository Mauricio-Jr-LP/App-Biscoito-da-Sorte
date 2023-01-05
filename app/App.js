import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {
  const [biscoito, setBiscoito] = useState(require('./src/biscoito.png'));
  const [frase, setFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  function abrirBiscoito() {
    // Muda a imagem do biscoito
    setBiscoito(require('./src/biscoitoAberto.png'));
    
    //Define o numero correspondente a frase no array de forma aleatoria
    let numAleatorio = Math.floor(Math.random() * frases.length)
    setFrase('"' + frases[numAleatorio]+ '"');
  }

  function fecharBiscoito() {
    setBiscoito(require('./src/biscoito.png'));
    setFrase('');
  }
 

  return (
    <View style={styles.container}>

      <Image 
        source={biscoito}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {frase} </Text>

      <TouchableOpacity onPress={ () => abrirBiscoito() } style={styles.botao} >
        <View style={styles.areaBotao}>
          <Text style={styles.textoBotao}>Abrir Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => fecharBiscoito() } style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} >
        <View style={styles.areaBotao}>
          <Text style={[styles.textoBotao,{color: '#121212'}]}>Resetar</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius:  25
  },
  areaBotao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;