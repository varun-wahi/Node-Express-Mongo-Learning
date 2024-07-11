// /**
//  * let, const, var
//  * any keyword
//  * function name(): type {...}
//  */

// let students : string[] = ["Varun", "Sakshi", "Tarang"];
// printNames()

// function printNames() : void {
//     for (let index = 0; index < students.length; index++) {
//         const name = students[index];
//         console.log(name)
//     }
// }

// function sqrt(val : number): number{
//     return val * val;
// }

// // let data = sqrt(12)
// // console.log(data)

// //HIGH ORDER FUNTION
// //Function passed as parameter to function
// function login(fn: (name: string, password: string) => void) {
//   fn("MA", "123345");
// }

// function user(name: string, password: string) {
//   console.log(name, password);
// }

// // login(user);

// let signUp = (
//   name: string,
//   email: string,
//   pass: string,
//   isVerified: boolean = true
// ) => {
//   console.log("registered: ",name, email, pass, isVerified);
// };

// signUp("varun", "varun@gmail.com", "password", true)