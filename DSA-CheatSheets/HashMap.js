class Hashmap {
    constructor() {
      this._storage = [];
    }
  
    hashStr(str) {
      let finalHash = 0;
      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        finalHash += charCode;
      }
      return finalHash;
    }
  
    set(key, val) {
      let idx = this.hashStr(key);
  
      if (!this._storage[idx]) {
        this._storage[idx] = [];
      }
  
      this._storage[idx].push([key, val]);
    }
  
    get(key) {
      let idx = this.hashStr(key);
  
      if (!this._storage[idx]) {
        return undefined;
      }
  
      for (let keyVal of this._storage[idx]) {
        if (keyVal[0] === key) {
          return keyVal[1];
        }
      }
    }
  }
  
  var dict = new Hashmap();
  dict.set("james", "123-456-7890");
  dict.set("jess", "213-559-6840");
  console.log(dict.get("james"));