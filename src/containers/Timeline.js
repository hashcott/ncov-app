import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { fetch_timeline } from "../actions";
import TimelineItem from "../components/Timeline/TimelineItem";

const Timeline = (props) => {
  const [page, setPage] = useState(2);
  const _renderItem = ({ item }) => {
    return <TimelineItem {...item} />;
  };
  useEffect(() => {
    props.fetch_timeline(1);
  }, []);

  const getNews = async () => {
    props.fetch_timeline(page);
    setPage(page + 1);
  };
  if (props.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/loading.gif")}
          style={{ width: 50, height: 50, alignSelf: "center" }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>TIMELINE</Text>
      <View>
        <FlatList
          data={props.data.filter((timeline) => timeline.time != undefined)}
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
    </View>
  );
};
const mapStateToProps = (state) => ({
  data: state.timelines.data,
  loading: state.timelines.loading,
});
export default connect(mapStateToProps, { fetch_timeline })(Timeline);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 10,
  },
});
