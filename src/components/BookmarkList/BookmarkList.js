import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import BookmarkItem from "./BookmarkItem";
let data = [
  {
    id: "1",
    title: "Post 1",
    thumbnail: "https://via.placeholder.com/320",
    content: "hellosffffffffffffffffffffffffffffffffffffff",
  },
  {
    id: "2",
    title: "Post 2",
    thumbnail: "https://via.placeholder.com/320",
    content: "helloffffffssssssssssssssssssssssssssssss",
  },
  {
    id: "3",
    title: "Post 3",
    thumbnail: "https://via.placeholder.com/320",
    content: "hellosfffffffffffffffffffffffffffffffffffffffffffff",
  },
  {
    id: "4",
    title: "Post 4",
    thumbnail: "https://via.placeholder.com/320",
    content: "hellofssssssssssssssssssssssssssssssssssssss",
  },
];
const BookmarkList = () => {
  const _renderItem = ({ item }) => {
    return <BookmarkItem {...item} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>BOOKMARK</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BookmarkList;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    marginHorizontal: 10,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
