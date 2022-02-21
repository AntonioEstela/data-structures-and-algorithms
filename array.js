class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
      this.data[this.length] = item;
      this.length += 1;
  }
}

const newArray = new MyArray();
console.log(newArray);

newArray.push(12);
console.log(newArray);

console.log(newArray.get(0));
