function getChai(kind: string | number) {
  if (typeof kind === "string") {
    //?Here it is guaranteed that kind data type is string only.
    //?Here the advantage is that you get to know what methods you need to suggest while doing like kind.length.
    //?That is basically the advantage of the type Narrowing.
    return `Making ${kind} chai...`;
  }

  //?Here it is guaranteed that kind data type is number only.
  return `Chai order: ${kind}`;
}

const chaiType: string | number = getChai("Masala Tea");
console.log(chaiType);
const chaiNumber: string | number = getChai(10);
console.log(chaiNumber);

//* let say you sent me a message, now you may or may not have sent the message,so basically by putting in a Question Mark We Make it optional

function getMsg(msg?: string) {
  //* It is not guaranteed that the message would be there.
  if (msg) {
    return `${msg}`;
  }
  return `Default Message is Hello World`;
}

const message: string = getMsg();
console.log(message);

const customMessage: string = getMsg("Namaste TypeScript");
console.log(customMessage);

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }

  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `chai order ${size}`;
}


