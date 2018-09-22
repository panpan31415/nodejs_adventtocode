const fs = require("fs");
fs.readFile("./input.txt",(err,data)=>{
    console.time("analysing");
    if(err){console.log("err")}
    let input = data.toString("utf8").split('');
    let floor=0;
    for(let i=0; i<input.length; i++){
        if(input[i]==="("){
            floor++;
        }else if(input[i]===")"){
            floor--;
        }
    }
    console.log(floor);
    console.timeEnd("analysing");
});
