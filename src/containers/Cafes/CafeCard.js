import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { cafesContext } from "../../contexts/CafesContext";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function CafeCard({ item }) {
  const classes = useStyles();


  return (
    <Grid item md={4}>
      <Link to={`/disheslist/${item.id}`} style={{texDecoration: "none", color: 'white'}}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
