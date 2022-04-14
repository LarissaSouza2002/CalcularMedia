import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FormValidar from "../../componetes/form/FormValidar";

export default function ValidarNumero() {
  return (
    <View style={styles.container}>
      <FormValidar></FormValidar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
});
