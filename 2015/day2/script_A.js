const fs = require("fs");
fs.readFile("./input.txt", (err, data) => {
  console.time("analysing");
  if (err) {
    console.log("err");
  }
  let input = data.toString("utf8").split("\r\n");
  let total = 0 ;
  for(let i=0; i<input.length; i++){
    const box = new Box(input[i]);
    total += box.getTotalArea();
  }

  console.log(total);
});




class Box {

  constructor(dimension) {
    let dimensions = dimension.split("x");
    this.H = dimensions[0];
    this.W = dimensions[1];
    this.L = dimensions[2];
    this.getTotalArea =  this.getTotalArea.bind(this);
  }

  getTotalArea() {
    let suf1 = this.H * this.W;
    let suf2 = this.H * this.L;
    let suf3 = this.W * this.L;

    let sur_container = [suf1,suf2,suf3];
    let smallest = sur_container.sort((a,b)=>a-b)[0];
    let total = 2*(suf1 + suf2 + suf3) + smallest;
    console.log(`${suf1},${suf2},${suf3},${smallest}`);
    return total;
  }
}
