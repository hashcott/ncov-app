import {
  FETCH_TIMELINE_NEWS,
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_FAILURE,
} from "../actions/type";
const initialState = { loading: true, data: [] };
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIMELINE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_TIMELINE_NEWS:
      return { ...state, loading: true };
    case FETCH_TIMELINE_FAILURE:
      return { ...state, loading: true, error: action.payload };
    default:
      return state;
  }
};
