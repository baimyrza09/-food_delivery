import { Grid, Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { cafesContext } from "../../contexts/CafesContext";
import DishesCard from "../Cafes/DishesCard";

const DishesList = (props) => {
  const { cafesDetails, getCafesDetails } = useContext(cafesContext);

  useEffect(() => {
    getCafesDetails(props.props.match.params.id);
  }, []);

  return (
    <>
      {cafesDetails?.menu ? (
        <>
          {cafesDetails.menu.map((item) => (
            <DishesCard item={item} key={item.id} />
          ))}
          </>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default DishesList;
