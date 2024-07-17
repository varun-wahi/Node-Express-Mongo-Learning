import express from "express";
import { getDatabase } from "../../data/mongodb_client";
import { Db, ObjectId } from "mongodb";

//CREATE EXPRESS OBJECT FOR ROUTING

const userRouting = express.Router();

//CRUD OPERATIONS

//1. CREATE USER
userRouting.post("/createUser" , async (req: express.Request, res: express.Response) =>{
    let db : Db = getDatabase();
    let usersCollection = db.collection("users");

    let body = req.body;

    const data = await usersCollection.insertOne(body);
    res.status(200).json({
        "response": data
    })

})


//2. READ ALL USERS
userRouting.get("/findUsers" , async (req: express.Request, res: express.Response) =>{
    let db : Db = getDatabase();
    let usersCollection = db.collection("users");

    let body = req.body;

    const data = await usersCollection.find({}).toArray();
    res.status(200).json({
        "response": data
    })

})

//3. READ USER PROFILE
userRouting.get("/getProfile/:id" , async (req: express.Request, res: express.Response) =>{
    let db : Db = getDatabase();
    let usersCollection = db.collection("users");

    const userID = req.params.userID;

    const data = await usersCollection.find({"_id":new ObjectId(userID)}).toArray();
    res.status(200).json({
        "response": data
    })

})


//4. UPDATE USER PROFILE
userRouting.put("/updateProfile" , async (req: express.Request, res: express.Response) =>{
    let db : Db = getDatabase();
    let usersCollection = db.collection("users");

    const body = req.body;

    const data = await usersCollection.updateOne({"_id": new ObjectId(body.userID)}, {$set: {"name": body.name, "email":body.email}});
    res.status(200).json({
        "response": data
    })

})

//4. DELETE USER 
userRouting.delete("/deleteUser" , async (req: express.Request, res: express.Response) =>{
    let db : Db = getDatabase();
    let usersCollection = db.collection("users");

    const userId = req.body.userId;

    const data = await usersCollection.deleteOne({"_id": new ObjectId(userId)});
    res.status(200).json({
        "response": data
    })

})

//TO USE "userRouting" in server.ts file, we will export it as follows
export default userRouting;
