const express = require('express')
const app = express();
const port = process.env.PORT || 8080
const path = require('path')

app.use(express.static(path.join(__dirname , 'public'))) //portfolio page

app.get('/name' , (req , res) => {
   res.send(`Prosper Eravwuvieke`)
}) // prints name on the browser





app.listen(port , () => {
   console.log(`server is listening on port ${port}`)
})