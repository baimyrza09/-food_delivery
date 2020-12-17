import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {cafesContext} from "../../contexts/CafesContext";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function DishesCard({ item }) {
  const classes = useStyles();
  const {addAndDeleteOrderInCart} = useContext(cafesContext)

  return (
    <Grid item md={6}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              KGS {item.price}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
           <AddIcon onClick={() => addAndDeleteOrderInCart(item)}/>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={item.img}
          title="Live from space album cover"
        />
      </Card>
     </Grid>
  );
}
