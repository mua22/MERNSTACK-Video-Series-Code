const axios = require("axios");
console.log("Starting");
axios
  .get("https://usman-recipes.herokuapp.com/api/recipes")
  .then((res) => {
    console.log(res.data.length);
  })
  .catch((err) => console.log(err));

console.log("Ending");
