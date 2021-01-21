import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam(`id`);

  const blogPost = state.find((item) => item.id === id);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => {
          navigation.pop();
        })
      }
      initialState={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
