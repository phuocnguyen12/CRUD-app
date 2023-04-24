import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState('');

  const findGreet = () => {
    const hrs = new Date().getHours();
    if(hrs === 0 || hrs < 11) return setGreet('Morning');
    if(hrs === 11 || hrs < 1) return setGreet('Noon');
    if(hrs === 1 || hrs < 18) return setGreet('Afternoon');
    if(hrs === 18 || hrs < 0) return setGreet('Evening');
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={colors.PRIMARY} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    frontSize: 25,
    frontWeight: 'bold',
  },
});

export default NoteScreen;
