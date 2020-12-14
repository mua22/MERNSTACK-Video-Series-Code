console.clear();
let postcodes = require("./postcodes.json");
// console.log(postcodes.length);

let obj = postcodes.findIndex((p) => p.Region == "Crawley");
// let obj = postcodes.findIndex(findCrawle);
function findCrawle(post) {
  if (post.Region == "Crawley") return true;
  else return false;
}
console.log(obj);
console.log(postcodes.slice(200, 202));
