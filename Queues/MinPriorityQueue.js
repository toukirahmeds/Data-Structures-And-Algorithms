const QueueElement = require("./QueueElement");

function MinPriorityQueue() {
    let items = [];

    /**
     * Returns the length of the Queue.
     * 
     * @returns {number}
     */
    this.size = () => {
        return items.length;
    };

    /**
     * Adds a new item to the priority queue with the specific priority.
     * 
     * @param {any} value 
     * @param {number} priority 
     */
    this.enqueue = (value, priority) => {
        const queueElement = new QueueElement(value, priority);
        let added = false;
        for(let i = 0; i < this.size(); i++) {
            let item = items[i];
            if(item.priority > queueElement.priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if(!added) {
            items.push(queueElement);
        }
    };

    /**
     * Removes an item from the front of the queue.
     * 
     * @returns {any}
     */
    this.dequeue = () => {
        const item = items.shift();
        return item? item.value: null;
    };

    /**
     * Returns the front item of the queue.
     * 
     * @returns {any}
     */
    this.front = () => {
        const item = items[0];
        return item? item.value: null;
    };

    /**
     * Resets the queue to empty.
     */
    this.clear = () => {
        items = [];
    };

    /**
     * Prints all the items in the queue.
     */
    this.print = () => {
        let queueElements = "";
        for(let i = 0; i < this.size(); i++) {
            queueElements += items[i].value.toString() + " ";
        }
        console.log(queueElements);
    }
}

module.exports = MinPriorityQueue;
