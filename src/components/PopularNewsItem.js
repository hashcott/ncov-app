import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PopularNewsItem = ({ id, title, thumbnail, content }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.text}>{content.slice(0, 25)}...</Text>
        <Text style={styles.time}>
          <AntDesign name="clockcircleo" style={styles.time} /> 12 hours ago
        </Text>
      </View>
    </View>
  );
};

export default PopularNewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: { width: 90, height: 90, borderRadius: 5 },
  content: {
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  time: {
    marginVertical: 5,
    fontWeight: "100",
  },
});
