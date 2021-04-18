function Stack() {
    let items = [];

    /**
     * Adds an item to the top of the stack.
     * 
     * @param {any} item 
     */
    this.push = (item) => {
        if(item !== undefined) {
            items.push(item);
        }
        
    };

    /**
     * Remove and get the top item of the stack.
     * 
     * @returns {any} Top item of the stack.
     */
    this.pop = () => {
        return items.pop();
    };

    /**
     * Get the size of the stack.
     * 
     * @returns {number} Length of the stack
     */
    this.size = () => {
        return items.length;
    };

    /**
     * Clear the stack.
     */
    this.clear = () => {
        items = [];
    };

    /**
     * Get the item at the top of the stack.
     * 
     * @returns {any}
     */
    this.peek = () => {
        return items[items.length - 1]
    };

    /**
     * Check whether the stack is empty.
     * 
     * @returns {boolean}
     */
    this.isEmpty = () => {
        return items.length === 0;
    };

    /**
     * Print the items in the stack.
     */
    this.print = () => {
       console.log(items.toString()); 
    }
}

module.exports = Stack;
