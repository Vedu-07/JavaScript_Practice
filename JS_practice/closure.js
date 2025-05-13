// Closure

function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const closure = outer(); 
closure();


// Lexical Scoping

function outer() {
    const outerVar = 'I am from outer';

    function inner() {
        console.log(outerVar);
  }

    return inner;
}

const newClosure = outer();
newClosure();

