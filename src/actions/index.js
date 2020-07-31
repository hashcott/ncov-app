import news from "../apis/news";
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
} = require("./type");

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

export const fetch_news = (id) => async (dispatch) => {
  dispatch({ type: FETCH_NEWS });
  try {
    let res = await news.get(`/${id}`);
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_FAILURE, payload: error });
  }
};

export const fetch_top = () => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_TOP });
  try {
    let res = await news.get(`?_page=1&_limit=10`);
    dispatch({ type: FETCH_NEWS_TOP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_TOP_FAILURE, payload: error });
  }
};
