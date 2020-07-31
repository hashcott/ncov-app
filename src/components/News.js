import React from "react";
import { StyleSheet, Text, View } from "react-native";

const News = (props) => {
  console.log(props.route.params);
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
