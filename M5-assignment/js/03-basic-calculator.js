// ADD A FUNCTION CALLED CALCULATE
let n1, n2, operation, result;
function calculate(x, y, operation) {

    
    switch (operation) {
        case '+': result = x + y
            break;
        case '-': result = x - y
            break;
        case '*': result = x * y
            break;
        case '/': result = x / y
            break;
            default:
            result = 'Invalid operation';
    }
    return result;
}
do{
    n1 = parseInt(prompt(`Enter first number`));
    n2= parseInt(prompt(`Enter second number`))
    operation = prompt(`what kind of operation you want to perform either +, -, * or /`);
    if(operation !== '+' && operation !== '-' && operation !== '*' &&operation !== '/'){
        alert('invalid operation');
    } else {
       alert(calculate(n1, n2, operation))
  }
}while(operation === '+' && operation === '-' && operation === '*' &&operation === '/')
