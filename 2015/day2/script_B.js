const fs = require("fs");
fs.readFile("./input.txt", (err, data) => {
  console.time("analysing");
  if (err) {
    console.log("err");
  }
  let input = data.toString("utf8").split("\r\n");
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    const box = new Box(input[i]);
    total += box.getLength();
  }

  console.log(total);
});

class Box {
  constructor(dimension) {
    let dimensions = dimension.split("x").sort((a, b) => a - b);
    // longest dimension = dimensions[2]
    this.ribbon_bow = dimensions[0] * dimensions[1] * dimensions[2];
    this.ribbon_box = 2 * (parseInt(dimensions[0] )+ parseInt(dimensions[1]));
    
    this.getLength = this.getLength.bind(this);
  }
  getLength() {
    return this.ribbon_box + this.ribbon_bow;
  }
}
