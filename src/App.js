import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Buckets from "./components/Bucket";
import axios from "axios";
import apiConfig from "./config/apiConfig";
import { connect } from "react-redux";
import { fetchBuckets } from "../../store/Buckets/actions";

const App = () => {
  useEffect(() => {
    dispatch(fetchBuckets());
  }, []);

  return (
    <div className="App">
      <Header />
      <Buckets buckets={buckets} items={items} />
    </div>
  );
};

export default App;
