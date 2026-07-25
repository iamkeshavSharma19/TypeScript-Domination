//?Here inside the subs variable, number can also come and string can also come.This is known as Union.
let subs: number | string = "1M";
console.log(subs);

//?You can also make your own custom data types.
let apiRequestStatus: "pending" | "success" | "error" = "pending";
console.log(apiRequestStatus);

//?apiRequestStatus = "keshav" ==> It is not allowed.

let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "window";
console.log(airLineSeat);

const orders = ["12", "20", "28", "42"];

let currentOrder; //?In this  line when you will hover on this line, you will see "any"."any" means that I dont care about what the data type would be.Basically you can add any data type inside the currentOrder variable now.See you can also write the current line as the below one.
let currentOrder1: any;
for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);

let currentOrder2: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder2 = order;
  }
}

console.log(currentOrder2);
