import React from "react";
import Card from "../card/Card";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

const Flash = () => {

  const {items,isError,isLoading}= useSelector(store=>store.products)

  return (
    <Container maxWidth="lg" sx={{ display: "flex", gap: "20px" }}>
      {items.map(el=> <Card  key={el?.id}  title={el?.title} />)}
    
    </Container>
  );
};

export default Flash;
