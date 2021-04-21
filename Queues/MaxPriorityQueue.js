const QueueElement = require("./QueueElement");

function MaxPriorityQueue() {
    let items = [];

    /**
     * Returns the length of the queue.
     * 
     * @returns {number}
     */
    this.size = () => {
        return items.length;
    };

    /**
     * Adds an item to the queue with the specific priority.
     * 
     * @param {any} value 
     * @param {number} priority 
     */
    this.enqueue = (value, priority) => {
        const queueElement = new QueueElement(value, priority);
        let added = false;
        for(let i = 0; i < this.size(); i++) {
            const item = items[i];
            if(item.priority < queueElement.priority) {
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
     * Removes the item in the front of the queue and returns it.
     * 
     * @returns {any}
     */
    this.dequeue = () => {
        const item = items.shift();
        return item ? item.value: null;
    };

    /**
     * Returns the front item in the queue.
     * 
     * @returns {any}
     */
    this.front = () => {
        const item = items[0];
        return item ? item.value: null;
    };

    /**
     * Resets the queue to empty.
     */
    this.clear = () => {
        items = [];
    };

    /**
     * Print all the items in the queue.
     */
    this.print = () => {
        let queueElements = "";
        for(let i = 0; i < this.size(); i++) {
            queueElements += items[i].value.toString() + " ";
        }
        console.log(queueElements);
    }
}

module.exports = MaxPriorityQueue;
