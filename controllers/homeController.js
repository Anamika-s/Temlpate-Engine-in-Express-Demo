import path from "path"
 
const __dirname= path.resolve()
const homeController = (req,res)=>
{
  // res.send("<h1> Home Page </h1>")
  // res.sendFile(path.join(__dirname + "/views/homepage.html"))
  // res.render('homepage')
  // res.render('homepage' , {'name' :'Ajay'})
// res.render('homepage1')

res.render('homepage1', { title: 'Hey', message: 'Hello there!' } )
}

export {homeController}