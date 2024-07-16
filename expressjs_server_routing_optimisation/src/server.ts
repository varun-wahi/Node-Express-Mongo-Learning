import express from "express";
import userRouting from "./routing/user_routing";
import appLogger from "./app_logger/app_logger";
import { connectToDatabase } from "../../mongo_express_server/data/mongodb_client";


//initialising express
const app : express.Application = express();

//MIDDLEWARE

//to get json request, we need to define MIDDLEWARE
app.use(express.json())
app.use(appLogger)


//ROUTING

//defining default path for user routing
app.use("/v1/user", userRouting)




//define constants
const hostName : string = "localhost"
const portNumber : number = 5000



app.listen(portNumber, hostName, async () => {

  //Initialise Database
  await connectToDatabase();

  console.log(`${hostName}:${portNumber}/v1/user/`);

  console.log("Welcome to Mongo Express Server!")

})