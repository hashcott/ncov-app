import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createExample } from "../actions";
import { connect } from "react-redux";
import BookmarkList from "../components/BookmarkList/BookmarkList";

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <BookmarkList />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
  },
});
