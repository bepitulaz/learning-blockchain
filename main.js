/**
 * This file is following this tutorial:
 * https://medium.com/digital-alchemy-holdings/learn-build-a-javascript-blockchain-part-1-ca61c285821e
 */
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, data) {
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
    }

    mineBlock(difficulty) {
        
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesis()];
    }
    
    // the initial block
    createGenesis() {
        return new Block(0, "05/13/2018");
    }

    latestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    checkValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

// implementation here
let jsChain = new Blockchain();
jsChain.addBlock(new Block('05/14/2018', {amount: 5}));
jsChain.addBlock(new Block('05/15/2018', {amount: 10}));
jsChain.addBlock(new Block('05/16/2018', {amount: 3.5}));

console.log(JSON.stringify(jsChain, null, 4));
console.log('Is blockchain valid? ' + jsChain.checkValid());
