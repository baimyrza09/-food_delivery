import React from "react";
import { Grid } from "@material-ui/core";
import CafesList from "../../containers/Cafes/CafesList";
import Pagination from "../../components/Pagination";
import Main from "../Main/Main";


const Home = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Main/>
      <CafesList />
      <Grid item md={2}>
        <Pagination />
      </Grid>
    </Grid>
  );
};

export default Home;
