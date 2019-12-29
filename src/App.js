import React from "react";
import Header from "./components/Header";
import Buckets from "./components/Bucket";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuckets } from "./store/Buckets/actions";
import { fetchItems } from "./store/Items/actions";

import { useEffect } from "react";

const App = () => {
  const { buckets, loading, error, items } = useSelector(state => ({
    buckets: state.buckets.buckets,
    items: state.items.items,
    loading: state.buckets.loading,
    error: state.buckets.error
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBuckets());
    dispatch(fetchItems());
  }, [dispatch]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <Buckets buckets={buckets} items={items} />
    </div>
  );
};

export default App;
