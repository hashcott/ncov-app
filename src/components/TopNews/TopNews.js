import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { fetch_top } from "../../actions";
import FlatListNewsItem from "./FlatListNewsItem";

const TopNews = (props) => {
  useEffect(() => {
    props.fetch_top();
  }, []);
  const _renderItem = ({ item }) => {
    return <FlatListNewsItem {...item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>HOT NEWS</Text>
      <FlatList
        data={props.data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={_renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({ data: state.topNews.data });
export default connect(mapStateToProps, { fetch_top })(TopNews);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginLeft: 20,
    justifyContent: "center",
    marginVertical: 20,
  },
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
