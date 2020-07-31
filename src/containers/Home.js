import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetch_all } from "../actions";
import { connect } from "react-redux";
import TopNews from "../components/TopNews/TopNews";
import PopularNews from "../components/PopularNews/PopularNews";

const Home = () => {
  return (
    <View style={styles.container}>
      <TopNews />
      <PopularNews />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
