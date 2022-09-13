import express from "express"
import {routes} from './routes/webroute.js'
import dotenv from 'dotenv'

var app = express();
dotenv.config();
const port = process.env.PORT | 9000
console.log(process.env.NAME)
// These 2 settings are needed so that we can use other template
app.set('views', "./views")
// app.set('view engine','ejs')
app.set('view engine' ,'pug')
app.use("/", routes)

app.listen(port, ()=> {console.log(`User Service started at ${port}`)})