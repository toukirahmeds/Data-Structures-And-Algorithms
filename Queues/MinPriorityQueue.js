const QueueElement = require("./QueueElement");

function MinPriorityQueue() {
    let items = [];
    this.size = () => {
        return items.length;
    };
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

    this.dequeue = () => {
        const item = items.shift();
        return item? item.value: null;
    };

    this.front = () => {
        const item = items[0];
        return item? item.value: null;
    };

    this.clear = () => {
        items = [];
    };


    this.print = () => {
        let queueElements = "";
        for(let i = 0; i < this.size(); i++) {
            queueElements += items[i].value.toString() + " ";
        }
        console.log(queueElements);
    }
}

module.exports = MinPriorityQueue;
