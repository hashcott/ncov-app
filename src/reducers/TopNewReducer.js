import {
  FETCH_NEWS_TOP,
  FETCH_NEWS_TOP_SUCCESS,
  FETCH_NEWS_TOP_FAILURE,
} from "../actions/type";
const initialState = { loading: true, data: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    //Single Top
    case FETCH_NEWS_TOP_SUCCESS:
      return { loading: false, data: action.payload };
    case FETCH_NEWS_TOP:
      return { loading: true };
    case FETCH_NEWS_TOP_FAILURE:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
