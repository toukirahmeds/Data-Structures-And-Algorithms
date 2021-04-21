const MinPriorityQueue = require("./MinPriorityQueue");

const q = new MinPriorityQueue();

q.enqueue("Jack", 2);
q.enqueue("Camilla", 1);
q.enqueue("John", 1);
console.log(q.size());
console.log(q.front());
q.print();
q.dequeue();
q.print();
q.clear();
q.print();
console.log(q.dequeue());
