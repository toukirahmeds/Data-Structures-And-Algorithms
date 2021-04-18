const Stack = require("./Stack");

const s1 = new Stack();
s1.push();
s1.push(100);
console.log(s1.isEmpty());
console.log(s1.peek());
s1.pop();
s1.pop();
console.log(s1.size());
s1.print();
