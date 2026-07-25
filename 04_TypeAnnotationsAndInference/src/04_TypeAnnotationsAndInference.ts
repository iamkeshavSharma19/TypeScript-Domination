//?Annotations means ==> Main Samjhaunga i.e I will annotate

//?Inference means Apne Aap se samajh Jao
let drink = "chai"; //?here the typescript will itself understand [inference] that drink variable is a string.Typescript even infer all the default Javascript variable data types.This is also known as the type Inferencing.
let cups = Math.random() > 0.5 ? 10 : 5; //?hover on cups and you will see let cups: number.here also the typescript will infer that inside cups a number will come.
let cups1 = Math.random() > 0.5 ? 10 : "5"; //? let cups1: string | number

//&There are usually the 2 type of errors that you are going to notice in the typescript ==> One is the syntax error and second one is the type Error.

//?Type Annotations ==> In type Annotations you explicitly define the types
let chaiFlavour: string = "masala chai";
chaiFlavour = "Ginger tea";
console.log(chaiFlavour);

//?There are different types of annotations that you can write
let chaiOrder: number = 19;
console.log(chaiOrder);

let isChaiOrderFullFilled: boolean = true;
console.log(isChaiOrderFullFilled);

