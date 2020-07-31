import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
const _WIDTH = Dimensions.get("window").width;
const FlatListNewsItem = ({ id, title, thumbnail }) => {
  return (
    <View style={{ ...styles.card }}>
      <ImageBackground
        imageStyle={{ borderRadius: 25 }}
        source={{ uri: thumbnail }}
        style={styles.image}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default FlatListNewsItem;

const styles = StyleSheet.create({
  card: {
    width: _WIDTH - 60,
    marginRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "60%",
    marginHorizontal: 30,
  },
});
