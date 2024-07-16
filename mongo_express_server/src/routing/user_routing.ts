import express from "express";
import appLogger from "../app_logger/app_logger";
import bcrypt from 'bcrypt'
import { body, validationResult } from "express-validator";
import { getDatabase } from "../../data/mongodb_client";
import { Db } from "mongodb";

//CREATE EXPRESS OBJECT FOR ROUTING

const userRouting = express.Router();

//CRUD OPERATIONS

//1. CREATE USER
userRouting.post("/createUser" , (req: express.Request, res: express.Response) =>{
    let db : Db = getDatabase();
    let usersCollection = db.collection("users");

    let body = req.body;





})


//TO USE "userRouting" in server.ts file, we will export it as follows
export default userRouting;
