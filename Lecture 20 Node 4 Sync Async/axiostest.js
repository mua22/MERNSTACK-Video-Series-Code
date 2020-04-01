const axios = require("axios");

axios
  .get("https://usman-recipes.herokuapp.com/api/recipes/nbkjhhu")
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
