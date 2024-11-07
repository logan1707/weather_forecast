
const task=require('./task');
const a=require('fs');
const hp=a.readFileSync('./h.html');
const login=(req,res)=>{
    res.sendFile('./h.html',{root:__dirname});
};

const home= async (req,res)=>{


const t1=await task.find({})
    res.json({t1});
    console.log(typeof(t1));

}


  module.exports={login,home}  ;
  console.log("done");