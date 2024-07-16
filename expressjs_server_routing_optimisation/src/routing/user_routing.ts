import express from "express";
import appLogger from "../app_logger/app_logger";
import bcrypt from 'bcrypt'
import { body, validationResult } from "express-validator";

//CREATE EXPRESS OBJECT FOR ROUTING

const userRouting = express.Router();

//4 TYPES OF REQUESTS
//app.get, app.post, app.put, app.delete/

//USER ROUTING LEVEL MIDDLEWARE

// userRouting.use((req : express.Request, res : express.Response, next : express.NextFunction) => {

//     console.log(new Date().toLocaleTimeString())
//     console.log(new Date().toLocaleDateString())
//     console.log(req.method)
//     next();

// })


userRouting.get('/', (req: express.Request, res: express.Response) => {

    res.status(200)
    res.send("<h1>Hello World</h1><br><h1>METHOD: GET</h1>")

})

//POST METHOD
userRouting.post('/create', (req: express.Request, res: express.Response) => {

    res.status(200)
    res.send("<h1>Hello World</h1><br><h1>METHOD: POST</h1>")

})

//PUT METHOD
userRouting.put('/update', (req: express.Request, res: express.Response) => {

    res.status(200)
    res.send("<h1>Hello World</h1><br><h1>METHOD: PUT</h1>")

})


//DELETE METHOD
userRouting.delete('/delete', (req: express.Request, res: express.Response) => {

    res.send("<h1>User deleted</h1><br><h1>METHOD: DELETE</h1>")

})


userRouting.post('/login', appLogger, (req: express.Request, res: express.Response) => {
    //extract data
    let body = req.body;

    let { email, password } = req.body;

    //check if user in database

    if (email == 'varun@gmail.com' && password == '123456') {
        //USER IN DB

        res.status(200).json(body);
    } else {
        res.status(401).json({
            "status": res.statusCode,
            "data": body,
            "msg": "Invalid email password"
        })
    }

})

//CREATE NEW USER

userRouting.post('/createNewUser', [
    body('email').not().isEmpty().isEmail().withMessage("Correct E-mail Required."),
    body('name').not().isEmpty().withMessage("Enter your name")
], appLogger, async (req: express.Request, res: express.Response) => {
    //extract data
    let body = req.body;

    let { email, password, name } = req.body;

    //Validate form data
    let error = validationResult(req);

    if(!error.isEmpty()){

        res.status(400).json({
            "status": res.statusCode,
            "data": error,
        })

    }else{

    //check if user in database

    let salt = await bcrypt.genSalt()
    let hashPassword = await bcrypt.hash(password, salt)


    res.status(200).json({
        "status": res.statusCode,
        "data": body,
        "hashPassword": hashPassword
    })

    }





})



//TO USE "userRouting" in server.ts file, we will export it as follows
export default userRouting;
