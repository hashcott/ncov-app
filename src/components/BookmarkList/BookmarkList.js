import React, { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import BookmarkItem from "./BookmarkItem";
import { connect } from "react-redux";
import { fetchBookmarkData } from "../../actions";
import * as _ from "lodash";

const BookmarkList = ({ ids, data, fetchBookmarkData }) => {
  useEffect(() => {
    fetchBookmarkData();
  }, [ids]);
  console.log(_.uniqBy(data, "id")[0]);
  const _renderItem = ({ item }) => {
    return <BookmarkItem {...item} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>BOOKMARK</Text>
      <FlatList
        data={_.uniqBy(data, "id")}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  ...state.bookmarks,
});
export default connect(mapStateToProps, { fetchBookmarkData })(BookmarkList);

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    marginHorizontal: 10,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
