import React, { createRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
const TimelineItem = ({ id, content, time }) => {
  const [height, setHeight] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.circle} />
        <View style={{ ...styles.line, height }} />
      </View>
      <View style={{ flex: 0.8 }}>
        <Text style={styles.time}>
          {moment(parseInt(time) * 1000).format("DD-MM-YYYY HH:MM:SS")}
        </Text>
        <Text
          onLayout={(event) => {
            let { x, y, width, height } = event.nativeEvent.layout;
            setHeight(height);
          }}
          style={styles.content}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

export default TimelineItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  left: {
    flex: 0.1,
    alignItems: "center",
    marginRight: 10,
  },
  content: { textAlign: "justify" },

  time: {
    fontWeight: "bold",
    color: "green",
  },
  circle: {
    height: 15,
    width: 15,
    backgroundColor: "green",
    borderRadius: 999,
  },
  line: {
    width: 5,
    backgroundColor: "green",
    marginVertical: 10,
  },
});
