import React, { useEffect } from "react";
import Item from "../Item";
import "./Bucket.scss";

const Bucket = ({ buckets, items }) => {
  const itemByBucketId = bucketId => {
    return items.filter(item => item.bucketId === bucketId);
  };

  useEffect(() => {
    itemByBucketId();
  });

  return (
    <div className="Bucket">
      {buckets.map(bucket => (
        <div className="Bucket__info" key={bucket.bucketId}>
          <h3>{bucket.itemTitle}</h3>
          <Item items={itemByBucketId(bucket.bucketId)} key={bucket.bucketId} />
        </div>
      ))}
    </div>
  );
};

export default Bucket;
