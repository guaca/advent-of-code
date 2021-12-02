import { input } from './input.js';

// Parse input
const data = [];
for (var element of input) {
    const obj = {}
    obj[element.split(' ')[0]] = parseInt(element.split(' ')[1]);
    data.push(obj);
}

let horizontal = 0,
    depth = 0,
    aim = 0;

for (const item of data) {
    switch (Object.keys(item)[0]) {
        case 'forward':
            horizontal += Object.values(item)[0];
            depth += aim * Object.values(item)[0];
            break;
        case 'down':
            aim += Object.values(item)[0];
            break;
        case 'up':
            aim -= Object.values(item)[0];
            break;
    }
}

console.log("P1: ", horizontal * aim);
console.log("P2: ", horizontal * depth);