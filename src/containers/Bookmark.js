import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import PopularNews from "../components/PopularNews/PopularNews";

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <PopularNews />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Bookmark);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
