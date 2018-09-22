const fs = require("fs");
fs.readFile("./input.txt",(err,data)=>{
    console.time("analysing");
    if(err){console.log("err")}
    let input = data.toString("utf8").split('');
    let floor=0;
    let firstFloorPositions = [];
    for(let i=0; i<input.length; i++){
        if(input[i]==="("){
            floor++;
        }else if(input[i]===")"){
            floor--;
        }

        if(floor===-1){
            firstFloorPositions.push(i+1); // position starts with 1
        }
    }
    console.log(firstFloorPositions.join(","));
    console.timeEnd("analysing");
});
