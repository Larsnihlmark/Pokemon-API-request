const express = require("express")
const app = express()
const port = 9999


app.use('/', express.static('public'))

app.use(function (req,res,next){

    res.status(404).send("Sorry cant find it! :O");
  })


app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})


app.listen(port, () => console.log(`Up and running on localhost: ${port}!`))