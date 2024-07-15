//importing http
import http, { IncomingMessage, request, ServerResponse } from "http";
//importing url module
import * as url from "url";

import { UserData } from "./user/user_data";
import { AppRouting } from "./routing/app_routing";

//hostname and server port number required

const hostName: string = "localhost";
const portNumber: number = 5000;

//creating server using http package
let server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // //200 is success
  // res.statusCode = 200;
  // //SETTING RETURN TYPE (plain-text/html/json)
  // res.setHeader("content-type", "text/html");

  // //Setting url
  // let _url = req.url;
  // let queryParams = url.parse(_url!).query;

  AppRouting.appRouting(req, res)



});

//LISTEN TO SERVER
server.listen(portNumber, hostName, () => {
  console.log("Routing Optimisation Server started successfully.");
  console.log(`http://${hostName}:${portNumber}`);
});

//LISTEN TO SERVERres.statusCode
