import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const getData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  console.log("Inside Products Component");
  return (
    <div>
      <h1>Products</h1>
      <Fab color="primary" aria-label="add" className={classes.addBtn}>
        <AddIcon />
      </Fab>
      {products.length == 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
