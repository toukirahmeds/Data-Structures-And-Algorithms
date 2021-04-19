const Stack = require("./Stack");

const digits = "0123456789ABCDEF";

function baseConverter(decimalNum, base) {
    if(decimalNum === 0) {
        return "0";
    }

    let quotient = decimalNum;
    const remStack = new Stack();
    while(quotient !== 0) {
        remStack.push(quotient % base);
        quotient = Math.floor(quotient / base);
    }

    let baseString = "";
    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()].toString();
    }

    return baseString;
}

console.log(baseConverter(32, 16));
