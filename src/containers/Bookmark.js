import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BookmarkList from "../components/BookmarkList/BookmarkList";

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <BookmarkList />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
  },
});
