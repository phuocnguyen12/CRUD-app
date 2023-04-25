import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import NoteInputModal from "../components/NoteInputModal";
import RoundIconBtn from "../components/RoundIconBtn";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleOnSubmit = (title, destination, date, rick, desc) => {
    console.log(title, destination, date, rick, desc);
  }

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
            onPress={() => setModalVisible(true)}
            antIconName="plus"
            style={styles.addBtn}
          />
        </View>
      </View>
      <NoteInputModal
        visible={modalVisible}
        onclose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
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
