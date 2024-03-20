import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default () => {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText} value={text} placeholder="Search"/>
      <Button title="Filter" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,

  }
});