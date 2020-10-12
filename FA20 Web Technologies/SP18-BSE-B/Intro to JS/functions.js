function myTestFunc(x) {
  console.log(x);
}

var myfunc = myTestFunc;
console.log(myfunc);
console.log(typeof myfunc);

// myfunc("Calling from a variable");

function anotherFunc(myF) {
  myF("Hello Strange");
}

anotherFunc(myfunc);
