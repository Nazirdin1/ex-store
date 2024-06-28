import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
const Heart = () => {
  const { items2 } = useSelector((state) => state.heart);

  return (
    <div>
      {items2.map((item) => (
        <Card key={item.id} el={item} />
      ))}
    </div>
  );
};

export default Heart;

