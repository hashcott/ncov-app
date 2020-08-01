import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { fetch_news, createBookmark } from "../actions";

import { AntDesign, Feather } from "@expo/vector-icons";
import Markdown from "react-native-simple-markdown";

import * as RootNavigation from "../NavigationRef";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";

const News = ({
  bookmarks,
  loading,
  route,
  title,
  content,
  datetime,
  fetch_news,
  createBookmark,
  ids,
}) => {
  useEffect(() => {
    fetch_news(route.params.id);
  }, []);
  const renderLoad = () => {
    if (loading) {
      return (
        <Image
          source={require("../../assets/loading.gif")}
          style={{ width: 50, height: 50, alignSelf: "center" }}
        />
      );
    } else {
      return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 5 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "100", marginBottom: 20 }}>
            <AntDesign name="clockcircleo" style={styles.time} />{" "}
            {moment(parseInt(datetime) * 1000).format("DD/MM/YYYY HH:MM:SS")}
          </Text>
          <Markdown style={{ ...markdownStyles }}>{content}</Markdown>
        </ScrollView>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.action}>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.pop();
            }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          {ids.indexOf(route.params.id) === -1 && (
            <TouchableOpacity onPress={() => createBookmark(route.params.id)}>
              <Feather name="bookmark" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {renderLoad()}
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  ...state.singleNews,
  ids: state.bookmarks.ids,
  bookmarks: state.bookmarks,
});
export default connect(mapStateToProps, { fetch_news, createBookmark })(News);

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: "purple",
  },
  link: {
    color: "pink",
  },
  mailTo: {
    color: "orange",
  },
  text: {
    color: "#555555",
    fontSize: "30",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  header: { flex: 0.1, paddingTop: 15 },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  content: {
    flex: 0.9,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: "#fff",
  },
});
