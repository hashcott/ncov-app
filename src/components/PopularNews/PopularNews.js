import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import PopularNewsItem from "./PopularNewsItem";
import { connect } from "react-redux";
import { fetch_all } from "../../actions";

const PopularNews = (props) => {
  const [page, setPage] = useState(2);
  const _renderItem = ({ item }) => {
    return <PopularNewsItem {...item} />;
  };
  useEffect(() => {
    props.fetch_all(1);
  }, []);
  const getNews = async () => {
    props.fetch_all(page);
    setPage(page + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>POPULAR NEWS</Text>
      <FlatList
        data={props.data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={getNews}
        onEndReachedThreshold={1}
        ListFooterComponent={
          <ActivityIndicator size="large" loading={props.loading} />
        }
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  data: state.news.data,
  loading: state.loading,
});
export default connect(mapStateToProps, { fetch_all })(PopularNews);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginHorizontal: 10,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
