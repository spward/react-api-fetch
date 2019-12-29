import { combineReducers } from "redux";
import buckets from "./Buckets/reducers";
import items from "./Items/reducers";

export default combineReducers({
  buckets,
  items
});
