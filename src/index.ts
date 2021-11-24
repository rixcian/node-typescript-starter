require('dotenv').config();

const MY_NODE_VERSION: string = process.version;

console.clear();
console.log(`Hello, ${process.env.TEST_ENV}!`);
console.log(`Node.js version: ${MY_NODE_VERSION}`);