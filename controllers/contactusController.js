import path from "path"
 
const __dirname= path.resolve()

const contactusController = (req,res)=>
{
  // res.send("<h1> Contact Us </h1>")
  // res.sendFile(path.join(__dirname + "/views/contactus.html"))
  res.render('contactus')
}

export {contactusController}