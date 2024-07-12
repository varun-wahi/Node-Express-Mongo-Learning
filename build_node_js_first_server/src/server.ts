//importing http
import http, { IncomingMessage, request, ServerResponse } from "http";
//importing url module
import * as url from "url";
import * as os from "os"
//File system module Node
import * as fs from "fs"


//hostname and server port number required

const hostName : string = "localhost"
const portNumber : number = 5000


//creating server using http package
let server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
    //200 is success
    res.statusCode = 200;
    //SETTING RETURN TYPE (plain-text/html/json)
    res.setHeader("content-type","text/html")

    //Setting url
    let _url = req.url;
    let queryParams = url.parse(_url!).query


    let osMap = {
        osMemory : os.totalmem(),
       homedir : os.homedir(),
        freeMem: os.freemem(),
        sysName : os.hostname()
    }

    let filterdQuery = queryParams?.split("data=").pop()!.replaceAll("%20"," ")
    

    res.write(`<h2>${JSON.stringify(osMap)}</h2><br<h1>Home dir: ${osMap.homedir}</h1><br>><h2>${_url}</h2><br><h2>query: ${filterdQuery}</h2><br><h1 style="color:red">Hi from Varun's first server</h1><br><h2>${res.statusCode}</h2><br><h3>Method:${req.method}</h3>`);
    res.end()
});

//LISTEN TO SERVER
server.listen(portNumber, hostName, () => {
    console.log("Server started successfully.")
    console.log(`http://${hostName}:${portNumber}`)
})

//LISTEN TO SERVERres.statusCode