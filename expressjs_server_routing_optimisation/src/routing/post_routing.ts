import express, { response } from 'express';

const postRouting = express.Router();

//GET POST BY ID REQUEST
postRouting.get("/getPost/:id",(req : express.Request,res: express.Response) => {

    let postId = req.params.id;

    console.log("Post ID: "+ postId)

    res.status(200);
    res.send(`<h1>Post ${postId}</h1>`)

} )

export default postRouting;
