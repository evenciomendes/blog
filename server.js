if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
  }
 const express=require("express")
 const app=express()
 const methodOverrid=require("method-override")
 
 const indexRouter=require("./routes/index")
 //const blogRouter=require('./routes/blog')
 const userRouter=require('./routes/user')

 app.set("view engine", "ejs")
 app.set("views", __dirname+"/views")
 app.set("layout","layouts/layout")

const expressLayouts=require("express-ejs-layouts")
const bodyParser = require('body-parser')

app.use(expressLayouts)
app.use(express.static("public"))// ARQUIVOS ADICIONAIS
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

// BANCO DE DADOS MONGODB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, 
  { useNewUrlParser: true,
  useUnifiedTopology:true,
useCreateIndex:true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
app.use(express.urlencoded({extended:false}))
// BANCO DE DADOS MONGODB

app.use(methodOverrid("_method"))
// ROUTES - CONTROLLERS
app.use("/", indexRouter)
app.use('/user',userRouter)

app.listen(process.env.PORT || 3000)
