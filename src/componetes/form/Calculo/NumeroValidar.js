import { StyleSheet, View, TextInput, Button, Text } from "react-native";

import { useState } from "react/cjs/react.development";

export default function NumeroValidar() {
  const [numero, setNumero] = useState(null);
  const [resultado, setResultado] = useState(null);

  function ValorNumero() {
    if (numero > 0 && numero <= 10) {
      setResultado("Este número está entre 0 e 10");
    } else if (numero > 10 && numero <= 30) {
      setResultado("Este número está entre 10 e 30");
    } else if (numero > 30) {
      setResultado("Este número é maior que 30");
    }
  }
  return (
    <View>
      <Text style={styles.tx}>{resultado}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={(numero) => setNumero(numero)}
          placeholder="Digite um Numero"
          keyboardType="numeric"
        />
        <Button
          style={styles.btn}
          onPress={ValorNumero}
          title="Verificar Número"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 0,
  },
  input: {
    backgroundColor: "#EEEDE9",
    borderRadius: 10,
    width: "75%",
    height: 50,
    marginBottom: 5,
    color: "black",
    fontSize: 20,
    padding: 10,
  },
  btn: {
    flex: 1,
  },
  tx: {
    fontSize: 20,
    fontWeight: "700",
    color: "green",
    marginTop: 0,
  },
});
