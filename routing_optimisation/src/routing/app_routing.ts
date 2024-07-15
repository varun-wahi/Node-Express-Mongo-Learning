import http, { IncomingMessage, ServerResponse } from "http";
import * as os from "os";
//File system module Node
import * as fs from "fs";
import path from "path";
import * as url from "url";
import { UserData } from "../user/user_data";
import { json } from "stream/consumers";

export class AppRouting {
  static appRouting(request: IncomingMessage, response: ServerResponse) {
    let pathName = url.parse(request.url!).pathname;
    let method = request.method;

    if (pathName == "/users" && method == "GET") {
      new UserData().getAllUsers((result) => {
        response.end(`<pre>${result}</pre>`);
      });
    } else if (pathName == "/os" && method == "GET") {
      //Data
      let osMap = {
        osMemory: os.totalmem(),
        homedir: os.homedir(),
        freeMem: os.freemem(),
        sysName: os.hostname(),
      };

      //Logic
      response.write(
        `<h2>${JSON.stringify(osMap)}</h2><br<h1>Home dir: ${
          osMap.homedir
        }</h3>`
      );
    } else if (pathName == "/fs" && method == "GET") {
      //Data
      fs.readFile(
        path.join(__dirname, "users_response.json"),
        "utf-8",
        (error, result) => {
          if (error) {
            response.write(`${error}`);
          }
          response.write(`<pre>${result}</pre>`);
          response.end();
        }
      );
      
    } else if (pathName == "/createuser" && method == "POST") {
        

        let body : any = ""
        request.on('data',(chunk) => {
            body += chunk
        }).on('end', () => {
            
            console.log(body)
            let jsonResponse = JSON.parse(body)
            response.end(`<h1>${jsonResponse.name} created successfully</h1>`)
        });


    //   let data = new UserData().createUser("Varun");

    //   response.end(`${data}`);
    }  else if (pathName == "/login" && method == "POST") {
        
        let body : any = " ";

        request.on('data', (chunk) =>{

            body += chunk;

        }).on('end', () => {
            
            let jsonResponse = JSON.parse(body);

            if(jsonResponse.email == "varun@dev.com" && jsonResponse.password == "123456"){

                response.end(`<h1>User login successful!</h1>`)

            }else{

                response.end(`<h1>User login failed :/</h1>`)

            }
        })


    } else {
      //Invalid path in URL
      response.write("Path not found");
    }
  }

  //   res.end();
}
