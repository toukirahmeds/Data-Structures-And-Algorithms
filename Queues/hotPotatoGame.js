const Queue = require("./Queue");

/**
 * Returns the winner of the hot potato game.
 * 
 * @param {string[]} playerList 
 * @param {number} roundingValue 
 */
function hotPotatoGame(playerList, roundingValue) {
    const q = new Queue();
    for(let i = 0; i < playerList.length; i++) {
        q.enqueue(playerList[i]);
    }

    while(q.size() > 1) {
        for(let i = 0; i < roundingValue; i++) {
            q.enqueue(q.dequeue());
        }

        console.log(`${q.dequeue()} has been eliminated from the game.`);
    }

    return q.dequeue();
}

const playerList = ["John", "Jack", "Camilla", "Ingrid", "Carl"];
const winner = hotPotatoGame(playerList, 7);
console.log(`Winner is ${winner}`);
