import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import colors from "../misc/colors";
import RoundIconBtn from "./RoundIconBtn";

const NoteInputModal = ({ visible, onclose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate_of_Trip] = useState("");
  const [rick, setRick_Assessment] = useState("");
  const [desc, setDescription] = useState("");
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text);
    if (valueFor === "destination") setDestination(text);
    if (valueFor === "date") setDate_of_Trip(text);
    if (valueFor === "rick") setRick_Assessment(text);
    if (valueFor === "desc") setDescription(text);
  };

  const handleSubmit = () => {
    if (
      !title.trim() &&
      !destination.trim() &&
      !date.trim() &&
      !rick.trim() &&
      !desc.trim()
    )
      return onclose();
    onSubmit(title, destination, date, rick, desc);
    setTitle('');
    setDestination('');
    setDate_of_Trip('');
    setRick_Assessment('');
    setDescription('');
    onclose('');
  };

  const closeModal = () => {
    setTitle('');
    setDestination('');
    setDate_of_Trip('');
    setRick_Assessment('');
    setDescription('');
    onclose('');
  }

  return (
    <>
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            value={title}
            placeholder="Title"
            style={[styles.input, styles.title]}
            onChangeText={(text) => handleOnChangeText(text, "title")}
          />
          <TextInput
            value={destination}
            multiline
            placeholder="Destination"
            style={[styles.input, styles.destination]}
            onChangeText={(text) => handleOnChangeText(text, "destination")}
          />
          <TextInput
            value={date}
            placeholder="Date of Trip"
            style={[styles.input, styles.date]}
            onChangeText={(text) => handleOnChangeText(text, "date")}
          />
          <TextInput
            value={rick}
            placeholder="Rick assessment"
            style={[styles.input, styles.rick]}
            onChangeText={(text) => handleOnChangeText(text, "rick")}
          />
          <TextInput
            value={desc}
            multiline
            placeholder="Description"
            style={[styles.input, styles.desc]}
            onChangeText={(text) => handleOnChangeText(text, "desc")}
          />
          <View style={styles.btnContainer}>
            <RoundIconBtn
              size={20}
              style={{ marginRight: 15 }}
              antIconName="check"
              onPress={handleSubmit}
            />
            {
              title.trim() || 
              destination.trim() || 
              date.trim() || 
              rick.trim() || 
              desc.trim() ? (
              <RoundIconBtn 
              size={20} 
              antIconName="close" 
              onPress={closeModal}
              /> 
              ) : null}
          </View>
        </View>
        <TouchableNativeFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableNativeFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  destination: {
    height: 60,
    marginBottom: 15,
    fontWeight: "bold",
  },
  date: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  rick: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  desc: {
    height: 60,
    marginBottom: 15,
    fontWeight: "bold",
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

export default NoteInputModal;
