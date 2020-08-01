import * as _ from "lodash";
import {
  FETCH_BOOKMARK,
  CREATE_BOOKMARK,
  DELETE_BOOKMARK,
  FETCH_BOOKMARK_DATA,
} from "../actions/type";

const initialState = { data: [], ids: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARK:
      return { ...state, ids: state.ids.concat(action.payload) };
    case CREATE_BOOKMARK:
      return { ...state, ids: state.ids.concat(action.payload) };
    case DELETE_BOOKMARK:
      return {
        ...state,
        bookmarks: _.remove(state.ids, (id) => id === action.payload),
      };
    case FETCH_BOOKMARK_DATA:
      return { ...state, data: state.data.concat(action.payload) };
    default:
      return state;
  }
};
