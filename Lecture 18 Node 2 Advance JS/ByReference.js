let x = 10;
let y = x;
x = 20;
console.log(y);

let user = { name: "Usman", email: "usman@usman.com" };
let anotherUser = user; //will create a shallow copy
let anotherAnotherUser = Object.assign({}, user); // will create a deep copy
let user1 = { ...user }; // will create a deep copy
user.name = "Ali";
console.log(anotherUser);
console.log(anotherAnotherUser);
console.log(user1);
// console.log(...user); // you cannot do this
