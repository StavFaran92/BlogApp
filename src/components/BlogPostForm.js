import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialState }) => {
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(value) => setContent(value)}
      />
      <Button
        style={styles.button}
        onPress={() => onSubmit(title, content)}
        title="Save Blog Post"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    padding: 5,
    margin: 5,
  },
});

export default BlogPostForm;
