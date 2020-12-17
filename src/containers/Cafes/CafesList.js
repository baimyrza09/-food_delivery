import React, { useEffect, useContext } from "react";
import { Container, Grid } from "@material-ui/core";
import CafeCard from "./CafeCard";
import { cafesContext } from "../../contexts/CafesContext";

const CafesList = () => {
  const { cafes, getCafes, currentPosts } = useContext(cafesContext);

  useEffect(() => {
    getCafes();
  }, []);

  return (
    <Container maxWidth="lg">
     {currentPosts ? ( <Grid container spacing={3}>
        {currentPosts.map((item) => (
          <CafeCard item={item} key={item.id} />
        ))}
      </Grid>) : (<h1>loading</h1>)}
    </Container>
  );
};

export default CafesList;
