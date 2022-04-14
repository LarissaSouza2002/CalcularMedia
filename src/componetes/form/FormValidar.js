import { StyleSheet, View, Text } from 'react-native';

import NumeroValidar from './Calculo/NumeroValidar';

export default function FormValidar(){
    
    return(
        <View style={styles.conteudo}>
          <Text style={styles.title}>Validação de Valores</Text>
          <NumeroValidar></NumeroValidar>
          <NumeroValidar></NumeroValidar>
          <NumeroValidar></NumeroValidar>
      </View>
    )
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F7C21C",
  },
});