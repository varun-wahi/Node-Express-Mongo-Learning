// //INTERFACES
// //Contain only definition. Implementation defined when calling the function

// import { Interface } from "readline";

// interface User {
//   name: string;
//   id: number;
//   email: string;
// }

// //ADDING EXTRA METHODS AND FIELDS LATER TO THE INTERFACE
// interface User {
//   username?: string; //OPTIONAL

//   //METHOD
//   getUserInfo(): string;

//   updateUserProfile: () => string;

//   // function addUsername(username:string) {
//   //     username = username;
//   // }
// }

// const user1: User = {
//   name: "Varun",
//   id: 12,
//   email: "varunwahikvvfj@gmail.com",
//   username: "varun_wahi",
//   getUserInfo() {
//     return "hello user";
//   },
//   updateUserProfile() {
//     return "update profile";
//   },
// };

// // console.log(user1.email);
// // console.log(user1.getUserInfo());
// // console.log(user1.updateUserProfile());

// //WE NOW WANT NEW ADMIN INTERFACE BUT IT ALSO REQUIRES ALL INFRO FROM USER INTERFACE

// interface AdminUser extends User{
//     accountType : "admin" | "superAdmin" | "customer";
// }

// const user2 : AdminUser = {name: "Varun",
//     id: 12,
//     email: "varunwahikvvfj@gmail.com",
//     username: "varun_wahi",
//     getUserInfo() {
//       return "hello user";
//     },
//     updateUserProfile() {
//       return "update profile";
//     }, accountType: "customer"
// }