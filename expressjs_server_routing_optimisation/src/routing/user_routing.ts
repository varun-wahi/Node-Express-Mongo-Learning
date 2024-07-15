import express from "express";

//CREATE EXPRESS OBJECT FOR ROUTING

const userRouting = express.Router();

//4 TYPES OF REQUESTS
//app.get, app.post, app.put, app.delete/

userRouting.get('/', (req : express.Request, res : express.Response) =>{

    res.status(200)
    res.send("<h1>Hello World</h1><br><h1>METHOD: GET</h1>")
  
  } )

//POST METHOD
userRouting.post('/create', (req : express.Request, res : express.Response) =>{

    res.status(200)
    res.send("<h1>Hello World</h1><br><h1>METHOD: POST</h1>")
  
  } )
  
  //PUT METHOD
  userRouting.put('/update', (req : express.Request, res : express.Response) =>{
  
    res.status(200)
    res.send("<h1>Hello World</h1><br><h1>METHOD: PUT</h1>")
  
  } )
  
  
  //DELETE METHOD
  userRouting.delete('/delete', (req : express.Request, res : express.Response) =>{
  
    res.send("<h1>User deleted</h1><br><h1>METHOD: DELETE</h1>")
  
  } )


  userRouting.post('/login', (req: express.Request, res: express.Response) => {
    //extract data
    let body = req.body;

    let{email, password}  = req.body;

    //check if user in database

    //if user in DB, then login

    res.status(200).json(body);

  })
  

  //TO USE "userRouting" in server.ts file, we will export it as follows
  export default userRouting;
