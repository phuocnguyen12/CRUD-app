import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import RoundIconBtn from "../components/RoundIconBtn";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState("");

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 11) return setGreet("Morning");
    if (hrs === 11 || hrs < 1) return setGreet("Noon");
    if (hrs === 1 || hrs < 18) return setGreet("Afternoon");
    if (hrs === 18 || hrs < 0) return setGreet("Evening");
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.PRIMARY} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}
        >
          <Text style={styles.emptyHeader}>Add Notes</Text>
          <RoundIconBtn
            onPress={() => console.log("opening modal")}
            antIconName="plus"
            style={styles.addBtn}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: colors.PRIMARY,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.1,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});

export default NoteScreen;
