import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import FlatListNewsItem from "./FlatListNewsItem";
let data = [
  {
    id: "1",
    title: "Post 1",
    thumbnail: "https://via.placeholder.com/320",
    content: "hello",
  },
  {
    id: "2",
    title: "Post 2",
    thumbnail: "https://via.placeholder.com/320",
    content: "hello",
  },
  {
    id: "3",
    title: "Post 3",
    thumbnail: "https://via.placeholder.com/320",
    content: "hello",
  },
  {
    id: "4",
    title: "Post 4",
    thumbnail: "https://via.placeholder.com/320",
    content: "hello",
  },
];
const TopNews = () => {
  const _renderItem = ({ item }) => {
    return <FlatListNewsItem {...item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>HOT NEWS</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={_renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TopNews;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginLeft: 20,
    justifyContent: "center",
    marginVertical: 20,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
