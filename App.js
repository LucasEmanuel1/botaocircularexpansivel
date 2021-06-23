import React from 'react';

import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

import CircleButton from 'react-native-circle-button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Clique no botão para ver informações sobre o IFAL
        </Text>
        <Image
          source={{
            uri:
              'https://www2.ifal.edu.br/campus/palmeira/comunicacao/arquivos/logos-do-ifal-vertical.png/@@images/ac3e97aa-6806-4523-bc47-7bf3c0950b0f.png',
          }}
          style={styles.logoifal}
          />
        <CircleButton
          size={45}
          primaryColor="black"
          secondaryColor="black"
          onPressButtonTop={() => alert('Contato Campus Palmeira dos Índios (82) 3421-3282')}
          onPressButtonRight={() => alert('Mande sua documentação para direcao@ifalpalmeira.edu.br')}
          onPressButtonBottom={() => alert('Abrindo Configurações...')}
          onPressButtonLeft={() => alert('Fale com o IFAL através do direcao@ifalpalmeira.edu.br')}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
    logoifal: {
    width: 200,
    height: 300,
    right: 300,
    top: 15,
    left: 85
  },
});
