import { combineReducers } from "redux";
import NewsReducer from "./NewsReducer";
import SingleNewsReducer from "./SingleNewsReducer";
import TopNewReducer from "./TopNewReducer";
import BookmarkReducer from "./BookmarkReducer";
import TimelineReducer from "./TimelineReducer";

export default combineReducers({
  news: NewsReducer,
  topNews: TopNewReducer,
  singleNews: SingleNewsReducer,
  bookmarks: BookmarkReducer,
  timelines: TimelineReducer,
});
