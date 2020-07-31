import {
  FETCH_ALL_NEWS,
  FETCH_ALL_NEWS_SUCCESS,
  FETCH_ALL_NEWS_FAILURE,
  FETCH_NEWS_TOP,
  FETCH_NEWS_TOP_SUCCESS,
  FETCH_NEWS_TOP_FAILURE,
} from "../actions/type";
const initialState = { loading: true, data: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ALL_NEWS:
      return { ...state, loading: true };
    case FETCH_ALL_NEWS_FAILURE:
      return { ...state, loading: true, error: action.payload };
    case FETCH_NEWS_TOP_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_NEWS_TOP:
      return { ...state, loading: true };
    case FETCH_NEWS_TOP_FAILURE:
      return { ...state, loading: true, error: action.payload };
    default:
      return state;
  }
};
