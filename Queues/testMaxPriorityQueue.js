const MaxPriorityQueue = require("./MaxPriorityQueue");

const q = new MaxPriorityQueue();
q.enqueue("Jack", 1);
q.enqueue("John", 3);
console.log(q.size());
q.print();
q.enqueue("Camilla", 2);
q.print();
console.log(q.front());
q.clear();
q.print();
