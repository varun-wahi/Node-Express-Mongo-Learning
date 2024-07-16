import express from 'express';

let appLogger = (req: express.Request, res: express.Response, next: express.NextFunction)=>{
    
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const method = req.method;
    const url = req.url;

    console.log(`[${time}] | [${date}] | [${method}] | [${url}]`)

    next();

}

export default appLogger;
