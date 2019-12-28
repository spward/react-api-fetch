import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Buckets from "./components/Bucket";
import { connect } from "react-redux";
import { fetchBuckets } from "./store/Buckets/actions";

const App = () => {
  const { error, loading, buckets } = props;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      {buckets.map(bucket => (
        <li key={bucket.bucketId}>{bucket.description}</li>
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  dispatch(fetchBuckets);
};

const mapStateToProps = state => ({
  buckets: state.buckets.items,
  loading: state.buckets.loading,
  error: state.buckets.error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
