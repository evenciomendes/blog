const express=require("express")
const router=express.Router()
const User=require("../models/user")
//const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']

router.get("/",async(req,res)=>{
    const users=await User.find()
  res.render('users/index',{users:users})
})
router.get("/new",(req,res)=>{
    res.render('users/new',{user:new User()})
  })
router.post("/",async(req,res)=>{
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
      //  dateOfBirth:new Date(req.body.dateOfBirth),
        timeOfBirth:req.body.timeOfBirth,
        cityOfBirth:req.body.cityOfBirth,
        countryOfBirth:req.body.countryOfBirth,
        biography:req.body.biography
    })
    saveImage(user, req.body.image)
    try{
        const newUser = await user.save()
        //console.info('dateOfBirth:',req.body.dateOfBirth)
        res.redirect(`users/${newUser.id}`) 
        // show page
    }catch(err){
        //console.info(err)
        res.redirect('users/')
    }
   
})
router.get("/:id",async(req,res)=>{
    const newUser=await User.findById(req.params.id)
    res.render('users/show',{user:newUser})
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

function saveImage(user, imageEncoded) {
    if (imageEncoded == null) return
    const image = JSON.parse(imageEncoded)
    if (image != null && imageMimeTypes.includes(image.type)) {
      user.faceImage = new Buffer.from(image.data, 'base64')
      user.faceImageType = image.type
    }
  }
module.exports=router