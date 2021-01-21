import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(
    Context
  );

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener(`didFocus`, () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
            >
              <View style={styles.row}>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather
                    style={styles.icon}
                    name="trash-2"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: `row`,
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomWidth: 1,
  },
  title: {
    paddingLeft: 5,
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    paddingRight: 5,
  },
});

export default IndexScreen;
