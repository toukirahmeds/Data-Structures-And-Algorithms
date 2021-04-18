const Stack = require("./Stack");

function decimalToBinary(decimalNum) {
    if(decimalNum === 0 || decimalNum === 1) {
        return decimalNum;
    }

    let quotient = decimalNum, divider = 2;
    let remStack = new Stack();
    while(quotient !== 0) {
        remStack.push(quotient % divider);
        quotient = Math.floor(quotient/divider);
    }

    let binaryString = "";
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return parseInt(binaryString);
}

console.log(decimalToBinary(1000));
