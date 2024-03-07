const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("Save DB error"));
    }
  })
}
function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  })
}
function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`succes register ${user.name}`);
  });
}
<<<<<<< HEAD
// function resistserByPromise(user) {
//   const result = saveDB(user).then(sendEmail).then(getResult);
//   console.log(result);
//   return result;
// }
const newUser = { email: "Tae@naver.com", password: "1234", name: "Tae" };
// const result = resistserByPromise(newUser);
// result.then(console.log);
const result = Promise.all([saveDB(newUser), sendEmail(newUser), getResult(newUser)]).then(console.log);
=======
function resistserByPromise(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  console.log(result);
  return result;
}
const newUser = { email: "Tae@naver.com", password: "1234", name: "Tae" };
const result = Promise.all([saveDB(newUser), sendEmail(newUser), getResult(newUser)]);
result.then(console.log);
>>>>>>> a089d785528e225e76351263b087e55b508e65e4

