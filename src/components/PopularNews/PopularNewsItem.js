import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import * as RootNavigation from "../../NavigationRef";

const PopularNewsItem = ({ id, title, thumb, datetime }) => {
  return (
    <TouchableOpacity
      onPress={() => RootNavigation.navigate("DetailNews", { id })}
      style={styles.container}
    >
      <Image source={{ uri: thumb }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>
          <AntDesign name="clockcircleo" style={styles.time} />{" "}
          {moment(datetime).format("DD-MM-YYYY HH:MM:SS")}
        </Text>
      </View>
    </TouchableOpacity>
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
    width: 0,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  time: {
    marginVertical: 5,
    fontWeight: "100",
  },
});
