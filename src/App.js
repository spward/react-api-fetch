import React from "react";
import Header from "./components/Header";
import Buckets from "./components/Bucket";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuckets } from "./store/Buckets/actions";
import { useEffect } from "react";

const App = ({ props }) => {
  const buckets = useSelector(state => ({
    buckets: state.buckets.buckets,
    loading: state.buckets.loading,
    error: state.buckets.error
  }));

  const dispatch = useDispatch(fetchBuckets);

  useEffect(() => dispatch, [dispatch]);

  return (
    <div className="App">
      <Header />
      {buckets.buckets}
    </div>
  );
};

export default App;
