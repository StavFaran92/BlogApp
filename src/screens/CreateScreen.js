import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => {
          navigation.navigate("IndexScreen");
        })
      }
      initialState={{ title: "", content: "" }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
