
const express = require("express");
const app  = express();
const http = require("http")
const path = require("path")
//xll
const IndexSectionSwiper = require("./IndexSectionSwiper.json")
const IndexSectionOne = require("./IndexSectionOne.json")
const IndexSectionTwo = require("./IndexSectionTwo.json")
const IndexSectionFour = require("./IndexSectionFour.json")
const IndexSectionFive = require("./IndexSectionFive.json")
//wq

const data = require('./classify.json');
//xj
const  mdlist = require("./mdlist.json");
const  mdlistli = require("./mdlistli.json");
const  detail = require("./detail.json");

//lz
app.use(express.static(__dirname))
app.use('/addr',(req,res)=>{

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

  res.sendFile(path.resolve(__dirname,'addresshome.json'),"utf-8")
}),
//  wjh
  app.use('/api/Carts',(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    res.sendFile(path.resolve(__dirname,'./CartsData.json'),"utf-8")
  })
//xll
app.get("/api/SectionSwiper", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(IndexSectionSwiper)
})

app.get("/api/SectionOne", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(IndexSectionOne)
})
app.get("/api/SectionTwo", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(IndexSectionTwo)
})
app.get("/api/SectionFour", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(IndexSectionFour)
})

app.get("/api/SectionFive", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(IndexSectionFive)
})
//wq
app.get('/api/ClassifyApis',(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.json(data);
})

// xj
app.use("/api/mdlist",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(mdlist)
  // console.log(mdlist)
}),
  app.use("/api/mdlistli",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(mdlistli)
    // console.log(mdlistli)
  }),
  app.use("/api/detail",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

      detail.forEach((item,index)=>{
        if(item.id == req.query.id){
          // console.log(req.query.id)
          console.log(index)
          console.log(item)
          res.json(detail[index])
        }else{
        }
      })
  })


app.listen(8082,()=>{
  console.log("api server is ready on port 8082")
})




