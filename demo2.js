// let is block scoped and var is function scope 
/*Why Block Scope?

Encapsulation: Block-scoped variables are only accessible within the block they are defined, helping to encapsulate and protect variable states.
Avoiding Hoisting Issues: Variables declared with var are hoisted to the top of their containing function or global scope, which can lead to unexpected behaviors. Block-scoping with let and const avoids this by not allowing variables to be accessed before their declaration.
Temporal Dead Zone (TDZ): Both let and const are in a "temporal dead zone" from the start of the block until their declaration is encountered, preventing the use of variables before they are declared.*/

/*Function Scope (var)
Definition: Function scope means that a variable is accessible within the entire function in which it is declared.
Behavior of var:
Variables declared with var are scoped to the function, which means they are accessible anywhere within the function, even before the declaration due to hoisting.*/

if(2 === 2){
    const  a = 3;
    console.log(a);
}

function num33() {
    let firstName = 'Mohammad';
    const lastName = 'Rahil';
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

num33();