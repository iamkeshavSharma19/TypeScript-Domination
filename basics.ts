//&How do we write functions in Javascript
//?name: string means whatever parameter I will give in the greet function,it will be of the type: string.now name value that I am expecting will be the string only.

//?What value will this function will return I can also tell that by Putting Up a colon.That too I want string.After round paranthesis write :string
function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Keshav"));
// console.log(greet(42)); Even if you run this code with the command node basics.ts, the code will be run successfully even though I was seeing the warnings because node basically removes all the types.
//?What is there extra in the TypeScript ?? i.e types i.e data-types.

//?In the Programming Languages like Java, C, C++, in these basically you always define a data type like int, string, float, boolean etc.But in Javascript you do'nt do anything like that.

//&As the Application grows up types helps us to recongnise the error early.

//?Another Problem is the loose docs.

//?Developer Tooling

//?AI

//~Advantages Of Typescript ==>
//~It is addon on to top of the Javascript.
//~Typescript never runs.Basically TypeScript needs a process,when this process happens then at the end of the day you get the JS.
//~ TS ==> Process ==> JS
//~Typescript has the type Checkers, which helps in checking the types,it also sees the consistency of the types.
//~With the help of type Checkers you get the consistency in the Code.
