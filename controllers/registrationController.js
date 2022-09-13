const registrationController = (req,res)=>
{
  // res.send("<h1> Contact Us </h1>")
  // res.sendFile(path.join(__dirname + "/views/contactus.html"))
  res.render('registration')
}

const handleForm = (req,res)=>
{
   res.send("Form is subitted")
}
export {registrationController, handleForm}