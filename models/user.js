
const mongoose = require('mongoose')
const faceImageBasePath='uploads/faceImage'
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required:true
    },
    password: {
      type: String,
      required:true
    },
    dateOfBirth: {
      type: Date
    },
    timeOfBirth: {
      type: String
    },
    cityOfBirth: {
      type: String
    },
    countryOfBirth: {
      type: String
    },
    faceImage: {
        type: Buffer
      },
    faceImageName:{
        type:String
    },
    faceImageType: {
        type: String
      },
    biography:{
      type:String
    }
})
userSchema.virtual('faceImagePath').get(function() {
   /* if (this.faceImage != null && this.faceImageType != null) {
      return `data:${this.faceImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }*/
    if (this.coverImageName != null) {
      return path.join('/', faceImageBasePath, this.faceImageName)
    }
  })
 module.exports = mongoose.model('User', userSchema)
 module.exports.faceImageBasePath = faceImageBasePath