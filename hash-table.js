const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    const hashed = sha256(key).slice(0, 8);

    return parseInt(hashed, 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let newPair = new KeyValuePair(key, value);
    let bucket = this.hashMod(key)

    if (this.data[bucket] !== null || this.data[bucket] === newPair){
      throw Error("hash collision or same key/value pair already exists!");
    }

    this.data[bucket] = newPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {

  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
