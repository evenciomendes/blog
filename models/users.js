const usersSchema = new mongoose.Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    dateOfBrith: {
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
    longitudeOfBirth:{
        type:Number
    },
    latitudeOfBirth:{
        type:Number
    },
    faceImage: {
        type: Buffer
      },
    faceImageType: {
        type: String
      }
})
blogSchema.virtual('faceImagePath').get(function() {
    if (this.faceImage != null && this.faceImageType != null) {
      return `data:${this.faceImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
  })
 module.exports = mongoose.model('Users', usersSchema)