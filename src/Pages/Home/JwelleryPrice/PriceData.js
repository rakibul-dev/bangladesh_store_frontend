import React from "react";

const PriceData = ({ item }) => {
  return (
    <h5 style={{ lineHeight: 1.8 }}>
      &nbsp; {item.type}&#58;  {item.price}&nbsp;টাকা /ভরি  &nbsp;
    </h5>
  );
};

export default PriceData;
