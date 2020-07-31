import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
const _WIDTH = Dimensions.get("window").width;
const FlatListNewsItem = ({ id, title, thumbnail, navigate }) => {
  return (
    <View style={{ ...styles.card }}>
      <ImageBackground
        imageStyle={{ borderRadius: 25 }}
        source={{ uri: thumbnail }}
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => navigate("DetailNews", { id })}
          style={styles.container}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default FlatListNewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: _WIDTH - 60,
    marginRight: 20,
    backgroundColor: "#fff",
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
