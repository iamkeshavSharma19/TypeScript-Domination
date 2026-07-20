//?1.TypeScript does'not do anything by itself,At the end of the day It has to be converted into the Javascript.
//?2.Visit TypeScript github repository.Inside src, inside compiler,you will find parser.ts file.
//?3.Your ts file first goes to the lexer.Every Programming language has the lexer and the Parser.After the lexer your Typescript file goes to the Parser.

//^4.Additional steps which comes under the Typescript is first is the Binder, Binder does'not exist in most of the languages.And checker is even not there in any single language.This checker was especially missing in the Javascript.

//^5.After that we get an emmiter,emitter's work is that after all the checks have been made,then you generate only,it is also called generator.Emitter then finally generates the .js, .d.ts and .map files.

//&6.Lexer's job is to tokenise.Every language consists of the tokens like => const, let, function, return etc.Lexer's Job is to break your code in the form of the Tokens.

//*7.Parser ==> Parser makes a tree Syntax for you.This tree is basically called AST [Abstract Syntax Tree].It is also called as the concrete syntax tree.

//?8.Binder ==> Binder takes the AST.Binder basically makes up the specialised Symbols Table because in typescript we add some additional symbols like we write :string,Then there is also a special concept which comes as the Parent Pointer.In the tree you are required to go both up and down, when you have to go up you should know about the Parent Pointer.

//?9.Flow Nodes ==> Check if name of type string then only we will return from the function.This concept is known as the Flow Node.This is also called as the if-else flow Nodes.This all work is basically done by the Binder.Binder basically makes the Symbol Tables, Parent Pointer as well as the Flow Nodes.Without all these,checking cannot happen.

//?10.After all these then you finally go to the Checker.Checker goes through the code 2 times.we go to each and every function and the Node and we check it's data type which was available, is that data type changed??In this Checker phase strict checking occurs.

//?Emiter ==> It's work is to generate the files and perform stripping.It strips off the :string from the TS File and then you finally get the JS file.
