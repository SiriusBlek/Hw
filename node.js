/** * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */

 const fs = require("fs");
 const axios = require("axios");
 const userURL = 'https://jsonplaceholder.typicode.com/users';
 const urlTODO = 'https://jsonplaceholder.typicode.com/todos';
 const urlALB = 'https://jsonplaceholder.typicode.com/albums';

 
 axios
   .get(userURL)
   .then((response) => {
     fs.writeFile("users.json", JSON.stringify(response.data), (err) => {
       if (err) {
         console.log(err);
       }
     });
   })
   .catch((error) => {
     console.log(error);
   });
 
 /**  * 2. Let's work with running node script with some environment variables
  * todo: Pass parameter ENV when you run this script.
  * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
  * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
  */
 
 const env = process.env.ENV || "DEV";
 
 if (env === "PRODUCTION") {
   axios
     .get(urlTODO)
     .then((response) => {
       fs.writeFile("todos.json", JSON.stringify(response.data), (err) => {
         if (err) {
           console.log(err);
         }
       });
     })
     .catch((error) => {
       console.log(error);
     });
 } else if (env === "DEV") {
   axios
     .get(urlALB)
     .then((response) => {
       fs.writeFile("albums.json", JSON.stringify(response.data), (err) => {
         if (err) {
           console.log(err);
         }
       });
     })
     .catch((error) => {
       console.log(error);
     });
 }