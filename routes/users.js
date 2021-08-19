const express=require("express")
const router=express.Router()
//const User=require("../models/user")
//const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

router.get("/",(req,res)=>{
  res.render('users/index')
})
router.get("/new",(req,res)=>{
    res.render('users/new')
  })
router.post("/",(req,res)=>{
    res.render('users')
})
router.get("/:id",(req,res)=>{
    res.render('users/show')
})
router.get("/:id/edit",(req,res)=>{
    res.render('users/edit')
})
router.put('/:id',(req,res)=>{
    res.render('users/index')
})
router.delete('/:id',(req,res)=>{
    res.render('users/index')
})


module.exports=router