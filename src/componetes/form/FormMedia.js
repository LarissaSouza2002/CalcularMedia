import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function FormMedia(){
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [n3, setN3] = useState(null);

    

    function CalcularMedia() {
      const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) )/3 

      if (media<4) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está REPROVADOR!');
      } else if (media>4 && media<7) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está em RECUPERAÇÃO!');
      }else if(media>7) {
        alert('Sua média foi: ' + media.toFixed(2) + '. PARABÉNS, VOCÊ FOI APROVADO!');
      }
    }

    return (
      <View style={styles.conteudo}>
        <Text style={styles.title}>Cáculo de Média</Text>
        <TextInput
          maxLength={4}
          style={styles.input}
          value={n1}
          onChangeText={(n1) => setN1(n1)}
          placeholder="Digite sua 1ª nota"
          keyboardType="numeric"
        />
        <TextInput
          maxLength={4}
          style={styles.input}
          value={n2}
          onChangeText={(n2) => setN2(n2)}
          placeholder="Digite sua 2ª nota"
          keyboardType="numeric"
        />
        <TextInput
          maxLength={4}
          style={styles.input}
          value={n3}
          onChangeText={(n3) => setN3(n3)}
          placeholder="Digite sua 3ª nota"
          keyboardType="numeric"
        />
        <Button
          style={styles.btn}
          onPress={CalcularMedia}
          title="Calcular Média"
        />
      </View>
    );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    backgroundColor: "#EEEDE9",
    borderRadius: 10,
    height: 60,
    marginBottom: 10,
    color: "black",
    fontSize: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF7F00",
  },
});