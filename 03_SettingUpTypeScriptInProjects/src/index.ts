function greet(person: string): string {
  return `Hello ${person}, Welcome to Typescript World`;
}

const username: string = "Chai Aur TypeScript";
console.log(greet(username));
//?for compiling this typescript file into the Javascript file use the command ==> npx tsc.Then see what happens in the dist folder.
