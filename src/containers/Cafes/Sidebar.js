import { Paper, Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { cafesContext } from "../../contexts/CafesContext";
import { calcSubPrice, calcTotalPrice } from "../../helpers/calcPrice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const { getCart, cartData, changeCountOrders } = useContext(cafesContext);
  const [test, setTest] = useState(null);

  useEffect(() => {
    setTest(JSON.parse(localStorage.getItem("cart")))
  }, [localStorage.getItem("cart")]);

  function handleChangeCount(e, id) {
    changeCountOrders(e.target.value, id);
  }

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <h1 style={{ color: "black" }}>Your Orders</h1>
        {test?.orders ? (
          test.orders.map((item) => (
            <tr key={item.order.id}>
              <td>{item.order.title}</td>
              <td>{item.order.price}</td>
              <td>
                <input
                  onChange={(e) => handleChangeCount(e, item.order.id)}
                  value={item.count}
                  type="number"
                  value={item.count}
                />
              </td>
              <td>{calcSubPrice(item)}</td>
            </tr>
          ))
        ) : (
          <h1>loading</h1>
        )}
      </Paper>
    </Grid>
  );
};

export default Sidebar;
