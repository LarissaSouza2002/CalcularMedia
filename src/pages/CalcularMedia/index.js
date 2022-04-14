import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FormMedia from "../../componetes/form/FormMedia";

export default function CalcularMedia() {
  return (
    <View style={styles.container}>
      <FormMedia></FormMedia>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },
});
