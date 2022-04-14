import React from "react";
import {StyleSheet, View, Text} from 'react-native'

export default function Usuario(){
    return(
        <View style={styles.container}>
            <Text>Perfil do Usuário</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
});