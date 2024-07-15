import express from "express";


//initialising express
const app = express();


//define constants
const hostName : string = "localhost"
const portNumber : number = 5000

//4 TYPES OF REQUESTS
//app.get, app.post, app.put, app.delete/

app.get('/', (req : express.Request, res : express.Response) =>{

  res.status(200)
  res.send("<h1>Hello World</h1><br><h1>METHOD: GET</h1>")

} )


//POST METHOD
app.post('/createUser', (req : express.Request, res : express.Response) =>{

  res.status(200)
  res.send("<h1>Hello World</h1><br><h1>METHOD: POST</h1>")

} )

//PUT METHOD
app.put('/updateUser', (req : express.Request, res : express.Response) =>{

  res.status(200)
  res.send("<h1>Hello World</h1><br><h1>METHOD: PUT</h1>")

} )


//DELETE METHOD
app.delete('/deleteUser', (req : express.Request, res : express.Response) =>{

  res.send("<h1>User deleted</h1><br><h1>METHOD: DELETE</h1>")

} )

app.listen(portNumber, hostName, () => {

  console.log("Welcome to Express server")

})