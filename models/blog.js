const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: Date,
    default:Date.now
  },
  subTitle: {
    type: String
  },
  description:{
    type:String
  },
  image: {
    type: String
  },
  slug:{
    type:String,
    required:true,
    unique:true
  },
  sanitazedHtml:{
    type:String
  },
  coverImage: {
    type: Buffer
  },
  coverImageType: {
    type: String
  },// NOME EMAIL DATA MENSAGEM IDPAI WEBSITE

  categories:{
    type:Array()
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})

blogSchema.virtual('coverImagePath').get(function() {
  if (this.coverImage != null && this.coverImageType != null) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
  }
})
blogSchema.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  if (this.description) {
   this.sanitizedHtml = dompurify.sanitize(marked(this.description))
  }

  next()
})
module.exports = mongoose.model('Blog', blogSchema)