// let user = {
//     name: "Karan",
//     email: "varunwahikv@gmail.com",
//     age: 23,
//     id: "1234",
//   };
  
//   let typescriptObject = {
//     name: "Varun",
//     email: "ma@gmail.com",
//     age: 234,
//     id: "1532",
//   };
  
//   function getData(obj: {
//     name: string;
//     email: string;
//     age: number;
//     id: string;
//   }) {
//     console.log(obj.name, obj.email, obj.age, obj.id);
//   }
  
//   //Retreiving data
//   // getData(user)
//   // getData(typescriptObject)
//   // getData({name:"Sakshi", email:"ghasda@hotmail.com", age: 23, id:"341"})
  
//   //Optional properties
  
//   function getItems(obj: { name: string; age?: number }) {
//     console.log(obj.age, obj.name);
//   }
  
//   //UNION types
  
//   function getDetails(id: string | number | number[]) {
//     if (typeof id == "string") {
//       console.log("${id.toUpperCase} ${typeof id}");
//     } else if (Array.isArray(id)) {
//       console.log("arrayDataId: " + id);
//     } else {
//       console.log(id);
//     }
//   }
//   getDetails(1);
//   getDetails("hello gamers");
//   getDetails([1,2,45,5]);
  
  
   
  
//   function getDocs(id : number) : number{
//       return id;
//   }