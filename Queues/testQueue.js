const Queue = require("./Queue");

const q = new Queue();

console.log(q.isEmpty());
q.enqueue(2);
q.clear();
console.log(q.size());
q.enqueue(3);
q.enqueue(5);
q.dequeue();

console.log(q.size());
console.log(q.front());
q.print();
