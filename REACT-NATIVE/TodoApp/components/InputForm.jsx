import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";

export default function InputForm() {
  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
      />
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },
  inputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    padding: 5,
    marginRight: 25,
    borderWidth: 1,
    borderWidth: 1,
    color: "#000000",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: "white",
    fontSize: 25,
  },
});
