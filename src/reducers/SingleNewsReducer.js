import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../actions/type";
const initialState = { loading: true };
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case FETCH_NEWS:
      return { loading: true };
    case FETCH_NEWS_FAILURE:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
