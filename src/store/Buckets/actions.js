import axios from "axios";
import apiConfig from "../../config/apiConfig";

export function fetchBuckets() {
  return dispatch => {
    dispatch(fetchBucketsBegin());
    return axios
      .get(apiConfig.BASE_URL + "buckets")
      .then(res => {
        dispatch(fetchBucketsSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(fetchBucketsFailure(error)));
  };
}

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const FETCH_BUCKETS_BEGIN = "FETCH_BUCKETS_BEGIN";
export const FETCH_BUCKETS_SUCCESS = "FETCH_BUCKETS_SUCCESS";
export const FETCH_BUCKETS_FAILURE = "FETCH_BUCKETS_FAILURE";

export const fetchBucketsBegin = () => ({
  type: FETCH_BUCKETS_BEGIN
});

export const fetchBucketsSuccess = buckets => ({
  type: FETCH_BUCKETS_SUCCESS,
  payload: { buckets }
});

export const fetchBucketsFailure = error => ({
  type: FETCH_BUCKETS_FAILURE,
  payload: { error }
});
