import { input } from './input.js';

// Generate new input for Puzzle 2
const p2InputGenerator = () => {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(input[i] + input[i + 1] + input[i + 2]);
    }
    return result;
}

const inputP2 = p2InputGenerator();

const calculateLarger = (input) => {
    let larger = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            larger++;
        }
    }
    return larger;
}
console.log("P1: ", calculateLarger(input));
console.log("P2: ", calculateLarger(inputP2));