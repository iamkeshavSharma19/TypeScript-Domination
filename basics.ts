//&How do we write functions in Javascript
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Keshav"));
//?This code will work but there is a problem with this code i.e if you changed the datatype here from "Keshav" to true.The code will run successfully but not to our expectations.
console.log(greet(true));
//~What if I pass a number datatype over here?
console.log(greet(42));
//?See the greet function was expecting that you will pass a string inside it,but you can pass a boolean as well as the number data type as well.That is why Typescript comes into the picture.
//&Basically When you give Javascript some extra super special Powers.That is called Typescript.But the moment when you change the extension from js to TS and you try to see the same code,you will start noticing some errors.
