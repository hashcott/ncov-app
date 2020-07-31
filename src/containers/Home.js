import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import TopNews from "../components/TopNews";
import PopularNews from "../components/PopularNews";

const Home = () => {
  return (
    <View style={styles.container}>
      <TopNews />
      <PopularNews />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
