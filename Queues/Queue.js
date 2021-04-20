function Queue() {
    let items = [];
    /**
     * Adds an item to the end of the queue.
     * 
     * @param {any} item 
     */
    this.enqueue = (item) => {
        items.push(item);
    };

    /**
     * Removes an item from the front of the queue and returns the removed item.
     * 
     * @returns {any}
     */
    this.dequeue = () => {
        return items.shift();
    };

    /**
     * Returns the length of the queue.
     * 
     * @returns {number}
     */
    this.size = () => {
        return items.length;
    };

    /**
     * Checks whether the queue is empty.
     * 
     * @returns {boolean}
     */
    this.isEmpty = () => {
        return this.size() === 0;
    };

    /**
     * Returns the front item in the queue.
     * 
     * @returns {any}
     */
    this.front = () => {
        return items[0];
    };

    /**
     * Prints the items in the queue.
     */
    this.print = () => {
        console.log(items.toString());
    };

    /**
     * Resets the queue to empty.
     */
    this.clear = () => {
        items = [];
    };
}

module.exports = Queue;
