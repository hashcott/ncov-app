import news from "../apis/news";
import AsyncStorage from "@react-native-community/async-storage";
import * as _ from "lodash";
const {
  FETCH_ALL_NEWS,
  FETCH_ALL_NEWS_SUCCESS,
  FETCH_ALL_NEWS_FAILURE,
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_TOP,
  FETCH_NEWS_TOP_SUCCESS,
  FETCH_NEWS_TOP_FAILURE,
  CREATE_BOOKMARK,
  FETCH_BOOKMARK,
  DELETE_BOOKMARK,
  FETCH_BOOKMARK_DATA,
} = require("./type");

// NEWS ALL IN PAGE
export const fetch_all = (page) => async (dispatch, getState) => {
  dispatch({ type: FETCH_ALL_NEWS });
  try {
    let res = await news.get(`?_page=${page}&_limit=10`);
    let data = _.concat(getState().news.data, res.data);
    data = _.uniqBy(data, "id");
    dispatch({ type: FETCH_ALL_NEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_NEWS_FAILURE, payload: error });
  }
};

// SINGLE NEWS
export const fetch_news = (id) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS });
  try {
    let res = await news.get(`/${id}`);
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error });
  }
};

// TOP NEWS
export const fetch_top = () => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_TOP });
  try {
    let res = await news.get(`?_page=1&_limit=10`);
    dispatch({ type: FETCH_NEWS_TOP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_TOP_FAILURE, payload: error });
  }
};

// CREATE BOOKMARK
export const createBookmark = (id) => async (dispatch, getState) => {
  fetchBookmark();
  dispatch({ type: CREATE_BOOKMARK, payload: id });
  try {
    const jsonValue = JSON.stringify(getState().bookmarks.ids);
    await AsyncStorage.setItem("@bookmark", jsonValue);
  } catch (e) {
    // saving error
  }
};

// FETCH BOOKMARK
export const fetchBookmark = () => async (dispatch) => {
  let json = await getData();
  dispatch({ type: FETCH_BOOKMARK, payload: json });
};
// fetchData
const fetchData = async (id) => {
  try {
    let res = await news.get(`/${id}`);
    return res.data;
  } catch (error) {}
};

// FETCH BOOKMARK and data
export const fetchBookmarkData = () => async (dispatch, getState) => {
  let ids = await getData();
  for (let i = 0; i < ids.length; i++) {
    dispatch({
      type: FETCH_BOOKMARK_DATA,
      payload: await fetchData(ids[i]),
    });
  }
};

// DELETE BOOKMARK
export const deleteBookmark = (id) => async (dispatch, getState) => {
  fetchBookmark();
  dispatch({ type: DELETE_BOOKMARK, payload: id });
  try {
    const jsonValue = JSON.stringify(getState().bookmarks.ids);
    await AsyncStorage.setItem("@bookmark", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@bookmark");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
