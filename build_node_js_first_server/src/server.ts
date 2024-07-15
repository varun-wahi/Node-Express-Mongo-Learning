//importing http
import http, { IncomingMessage, request, ServerResponse } from "http";
//importing url module
import * as url from "url";
import * as os from "os";
//File system module Node
import * as fs from "fs";
import * as path from "path"
import { UserData } from "./user/user_data";

//hostname and server port number required

const hostName: string = "localhost";
const portNumber: number = 5000;

//creating server using http package
let server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  //200 is success
  res.statusCode = 200;
  //SETTING RETURN TYPE (plain-text/html/json)
  res.setHeader("content-type", "text/html");

  //Setting url
  let _url = req.url;
  let queryParams = url.parse(_url!).query;
  let pathName = url.parse(_url!).pathname;
  let filterdQuery = queryParams?.split("data=").pop()!.replaceAll("%20", " ");
  let user = new UserData();

  if (pathName == "/users") {

    user.getAllUsers((result)=> {

        res.end(`<pre>${result}</pre>`);
    });

    

  } else if (pathName == "/data") {

    res.write("Data");

  } else if (pathName == "/os") {
    //Data
    let osMap = {
      osMemory: os.totalmem(),
      homedir: os.homedir(),
      freeMem: os.freemem(),
      sysName: os.hostname(),
    };

    //Logic
    res.write(
      `<h2>${JSON.stringify(osMap)}</h2><br<h1>Home dir: ${osMap.homedir}</h3>`
    );
  } else if (pathName == "/fs") {
    //Data
    fs.readFile(path.join(__dirname,"users_response.json"), "utf-8",(error, result) => {
        if(error){
            res.write(`${error}`)
        }
        res.write(`<pre>${result}</pre>`);
        res.end();
    } )
    //Logic
  }else if (pathName == "/createuser") {

    

    let data = user.createUser("Varun");

    res.end(`${data}`);


  }else {
    //Invalid path in URL
    res.write("Path not found");
  }
//   res.end();
});

//LISTEN TO SERVER
server.listen(portNumber, hostName, () => {
  console.log("Server started successfully.");
  console.log(`http://${hostName}:${portNumber}`);
});

//LISTEN TO SERVERres.statusCode
