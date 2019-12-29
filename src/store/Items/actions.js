import axios from "axios";
import apiConfig from "../../config/apiConfig";

export function fetchItems() {
  return dispatch => {
    dispatch(fetchItemsBegin());
    return axios
      .get(apiConfig.BASE_URL + "items")
      .then(res => {
        dispatch(fetchItemsSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(fetchItemsFailure(error)));
  };
}

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const FETCH_ITEMS_BEGIN = "FETCH_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_FAILURE";

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});
