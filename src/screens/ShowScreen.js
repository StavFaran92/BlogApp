import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((item) => item.id === navigation.getParam(`id`));

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("EditScreen", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" size={35} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: `bold`,
    borderBottomWidth: 2,
  },
  content: {
    fontSize: 28,
  },
  button: {
    padding: 10,
  },
});

export default ShowScreen;
