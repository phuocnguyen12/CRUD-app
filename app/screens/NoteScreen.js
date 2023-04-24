import React, { useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState('Morning');
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.PRIMARY} />
      <View style={styles.container}>
        <Text>{`Good ${greet} ${user.name}`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NoteScreen;
