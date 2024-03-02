const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filepath=`${dirPath}/apple.txt`;

//fs.writeFileSync(filepath,"This is simple text file");

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// })

//   fs.appendFile(filepath," and i am back",(err)=>{
//     if(!err) console.log("File is updated")
//   })

//   fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("File is updated")
//   })

 fs.unlinkSync(`${dirPath}/fruit.txt`);