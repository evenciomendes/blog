const express=require("express")
const router=express.Router()
const Blog=require("../models/blog")
//const Comments=require("../models/comments")
const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

router.get("/", async (req,res)=>{
  await root(req,res)
})






module.exports=router