import React from "react";
import { Paper, Grid, makeStyles, Container } from "@material-ui/core";
import DishesList from "../Cafes/DishesList";
import Sidebar from "../Cafes/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid container lg={9} spacing={3}>
            <DishesList props={props} />
        </Grid>
        <Grid item lg={3}>
            <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
