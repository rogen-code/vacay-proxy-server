const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')
const cors = require('cors');

app.use(cors());

//grab the incoming id
  //pass that id in a request to each of my components
  //components to render based on the results of the request

app.use('/:id', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})