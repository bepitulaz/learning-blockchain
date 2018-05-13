const merkle = require('merkle');
const useUppercase = false;

let abcde = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let tree = merkle('sha256', useUppercase).sync(abcde);

console.log('Depth: %d', tree.depth());
console.log('Level: %d', tree.levels());
console.log('Nodes: %d', tree.nodes());
console.log('Tree root: %s', tree.root());