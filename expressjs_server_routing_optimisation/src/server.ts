import express from "express";
import userRouting from "./routing/user_routing";
import postRouting from "./routing/post_routing";
import appLogger from "./app_logger/app_logger";


//initialising express
const app : express.Application = express();

//MIDDLEWARE

//to get json request, we need to define MIDDLEWARE
app.use(express.json())
app.use(appLogger)


//ROUTING

//defining default path for user routing
app.use("/v1/user", userRouting)

//defining default path for Post routing
app.use("/v1/post",postRouting)




//define constants
const hostName : string = "localhost"
const portNumber : number = 5000



app.listen(portNumber, hostName, () => {

  console.log(`${hostName}:${portNumber}/v1/user/`);

  console.log("Welcome to Express Server with Routing Optimisations")

})