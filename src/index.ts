//The data types of the variables can be declared from a explicit way or with an inference by the value assigned

let message: string = "This is a message from Typescript";
let message2 = "Message from another variable";

//Both are strings
console.log(typeof message);
console.log(typeof message2);


//The functions also need to specify the data type of the params
function exampleFunction(param: number) {
  return param;
}

//There is two ways for arrays data type declarations
let array1: string[] = ["One", "Two", "Three"];
let array2: number[] = [1, 2, 3];

let array1V2: Array<string> = ["One", "Two", "Three"];
let array2V2: Array<number> = [1, 2, 3];

//When we are working with different variables, on certain moments could happen we don´t know which data type a variable is, so TS recognizes de type and throws a bunch o methods for that specific type.

array1.map(x => console.log(x.toUpperCase));//It knows array1 is a string container and suggest string methods.

//Tuple is like fields of a data base table. You need to insert the values in the exact same order that the fields are. On this case, you need to put a number and then a string, but we can add more data types to the declaration like "tup:[number, string, number,...]" and so on..., but this is not recommended.
//( WARNING: There´s no error for .push() to a tuple)

let tup: [number, string] = [1, "Second value of the tuple"];

