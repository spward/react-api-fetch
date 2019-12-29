import {
  FETCH_BUCKETS_BEGIN,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE
} from "./actions";

const initialitemsState = {
  buckets: [],
  loading: false,
  error: null
};

const itemsReducer = (state = initialitemsState, action) => {
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
        buckets: action.payload.buckets
      };
    case FETCH_BUCKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        buckets: []
      };
    default:
      return state;
  }
};

export default itemsReducer;
