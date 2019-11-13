const express = require("express")
const app = express()
const port = 9999

app.get("/", express.static("public"));

app.use(function (req,res,next){
    res.status(404).send("Sorry cant find it!");
  });

app.listen(port, () => console.log(`Up and running on localhost: ${port}`))