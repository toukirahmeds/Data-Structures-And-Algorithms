const Stack = require("./Stack");
const openingBracesStr = "[{(";
const closingBracesStr = "]})";

/**
 * 
 * @param {string} parenthesesString 
 */
function isParenthesesBalanced(parenthesesString) {
    const strLen = parenthesesString.length;
    const stack = new Stack();
    let stackTop, stackTopOpeningBracesIndex;
    for(let i = 0; i < strLen; i++) {
        stackTop = stack.peek();
        stackTopOpeningBracesIndex = openingBracesStr.indexOf(stackTop);

        if(stackTopOpeningBracesIndex > -1 && stackTopOpeningBracesIndex === closingBracesStr.indexOf(parenthesesString[i])) {
            stack.pop();
        } else {
            stack.push(parenthesesString[i]);
        }
    }

    return stack.isEmpty();
}

console.log(isParenthesesBalanced("()")); // true
console.log(isParenthesesBalanced("()[]{}")); // true
console.log(isParenthesesBalanced("(]")); // false
console.log(isParenthesesBalanced("([)]")); // false
console.log(isParenthesesBalanced("{[]}")); // true
