import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";
import SingleNewsReducer from "./SingleNewsReducer";
import TopNewReducer from "./TopNewReducer";
import BookmarkReducer from "./BookmarkReducer";

export default combineReducers({
  news: NewsReducer,
  topNews: TopNewReducer,
  singleNews: SingleNewsReducer,
  bookmarks: BookmarkReducer,
});
