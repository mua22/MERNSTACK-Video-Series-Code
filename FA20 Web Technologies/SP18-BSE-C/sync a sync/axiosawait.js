const axios = require("axios");

test();

async function test() {
  console.log("Starting");
  let res = await axios.get("https://usman-recipes.herokuapp.com/api/recipes");
  console.log(res.data.length);
  console.log("Ending");
}
