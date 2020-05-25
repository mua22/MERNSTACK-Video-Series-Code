import React from "react";
import { Grid } from "@material-ui/core";
const SingleProduct = ({ product }) => {
  return (
    <Grid item xs={4}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <hr />
    </Grid>
  );
};

export default SingleProduct;
