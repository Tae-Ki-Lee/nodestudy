const DB = [];

function register(user) {
  return saveDB(user, function (user) { //콜백
    return sendEmail(user, function (user) { //콜백
      return getResult(user); //콜백
    });
  });
}

function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}
function sendEmail(user, callback) {
  console.log(`email to ${user.name}`);
  return callback(user);
}
function getResult(user) {
  return `succes register ${user.name}`;
}
const result = register({ email: "Tae@naver.com", password: "1234", name: "Tae" });
console.log(result);

