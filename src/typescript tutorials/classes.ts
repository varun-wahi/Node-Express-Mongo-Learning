class PostModel{
    // name : string  = "";
    // name! : string;
    protected postId: number
    postDes: string
    totalLikes: number
    //IMPORTANT INFO! HAVE TO HIDE IT. 
    //WE WILL CREATE GETTER SETTER
    private creatorUid! : string;

    constructor(postId:number, postDes: string, totalLikes: number){
        this.postId = postId;
        this.postDes = postDes;
        this.totalLikes = totalLikes;
        
    }

    getCreateNewPost() : void{
        console.log("\n*********************")
        console.log(this.creatorUid,"Posted Successfully!")
        console.log(this.postId)
        console.log(this.postDes)
        console.log(this.totalLikes)
        console.log("*********************")
    }

    //ENCAPSULATION

    set setUID(uid : string){
        this.creatorUid = uid;
    }

    //GETTER FOR PRIVATE UID
    get getUID() : string{
        return this.creatorUid;
    }

}

//INHERIT FROM PostModel
// class PaidPromototionPost{
//     price : number;

//     constructor(price:number){
//         this.price = price;
//     }
// }

class PaidPromototionPost extends PostModel{
    price : number;

    constructor(price:number, postId:number, postDes: string, totalLikes: number){
        super(postId, postDes, totalLikes);
        this.price = price;
    }

    createPaidPost(): void{
        console.log("\n*********************")
        console.log("Paid Post Successfully Created! \nUser has been paid Rs.%d",this.price)
        // console.log(this.creatorUid,"Posted Successfully!")
        //ABOIVE LINE GIVES ERROR BECAUSE creatorUID is Private.
        //TO ACCESS IT STILL, WE CAN USE
        console.log(this.getUID)
        console.log(this.postId)
        console.log(this.postDes)
        console.log(this.totalLikes)
        console.log("*********************")
    }
}

let post = new PostModel(123,"haha this is my new DP :)",23000)
post.getCreateNewPost()

//using setter to set value of userId
post.setUID = "varunwahii";
console.log("Posted by:",post.getUID)


let post2 = new PaidPromototionPost(200000,123,"kasndas",23123)
post2.setUID = "varunwahii";
post2.createPaidPost();