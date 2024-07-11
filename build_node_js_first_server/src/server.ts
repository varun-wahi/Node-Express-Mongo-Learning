//importing http
import http, { IncomingMessage, request, ServerResponse } from "http";


//hostname and server port number required

const hostName : string= "localhost"
const portNumber : number = 5000


//creating server using http package
let server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
    //200 is success
    res.statusCode = 200;
    res.setHeader("content-type","text/html")
    res.write('<h1 style = "color:red">Hi from Varuns first server</h1><br><h2>${res.statusCode}</h2>');
    res.end()
});

//LISTEN TO SERVER
server.listen(portNumber, hostName, () => {
    console.log("Server started successfully.")
})

//LISTEN TO SERVER