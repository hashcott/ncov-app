import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as RootNavigation from "../../NavigationRef";
import moment from "moment";
const BookmarkItem = ({ id, title, thumb, content, datetime }) => {
  return (
    <TouchableOpacity
      onPress={() => RootNavigation.navigate("DetailNews", { id })}
      style={styles.container}
    >
      <Image source={{ uri: thumb }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>
          <AntDesign name="clockcircleo" style={styles.time} />
          {moment(parseInt(datetime)).format("DD-MM-YYYY HH:MM:SS")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookmarkItem;

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
