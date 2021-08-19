const express=require("express")
const router=express.Router()
//const User=require("../models/user")
//const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

router.get("/",(req,res)=>{
  res.render('user/index')
})
router.get("/new",(req,res)=>{
    res.render('user/add')
  })
router.post("/",(req,res)=>{
    res.render('')
})
router.get("/:id",(req,res)=>{
    res.render('user/show')
})
router.get("/:id/edit",(req,res)=>{
    res.render('user/edit')
})
router.put('/:id',(req,res)=>{
    res.render('user/index')
})
router.delete('/:id',(req,res)=>{
    res.render('user/index')
})


module.exports=router