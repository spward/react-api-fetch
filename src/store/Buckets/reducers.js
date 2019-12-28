import {
  FETCH_BUCKETS_BEGIN,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE
} from "./actions";

const initialState = {
  buckets: [],
  loading: false,
  error: null
};

const bucketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUCKETS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_BUCKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.buckets
      };
    case FETCH_BUCKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};

export default bucketsReducer;
