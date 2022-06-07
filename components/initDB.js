import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("USER DATA", "1.0"); //create table for user

const initDB = () => {
  const query = `CREATE TABLE IF NOT EXISTS Users (
            email TEXT PRIMARY KEY,
            full_name TEXT NOT NULL,
            password TEXT NOT NULL
        )`;

  db.transaction((trx) => {
    let trxQuery = trx.executeSql(
      query,
      [],
      (transact, resultset) => console.log("We are in", resultset),
      (transact, err) => console.log("There was an error", err)
    );
  });
};
export default initDB;

export function insertUser(email, full_name, password) {
  console.log(
    `full name: ${full_name}, email: ${email}, password: ${password} `
  );
  db.transaction((trx) => {
    let trxQuery = trx.executeSql(
      "insert or ignore into Users(email, full_name, password) values(?,?,?)",
      [email, full_name, password],
      (transact, res) => {
        if (res.insertId < 0) {
          alert("This email is already in use");
        } else {
          alert("Account successfully created!");
        }
      },
      (transact, err) => console.log("function insertUser", err)
    );
  });
}

export function getUser(email, callback) {
  db.transaction((trx) => {
    let trxQuery = trx.executeSql(
      "select * from Users where email=?",
      [email],
      (transact, resultset) => {
        console.log(resultset);
        callback(resultset.rows._array[0]);
      },
      (transact, err) => console.log("function getUser", err)
    );
  });
}

// export function getUsers(callback) {
//   db.transaction((trx) => {
//     let trxQuery = trx.executeSql(
//       "select * from Users;",
//       [],
//       (transact, resultset) => {
//         callback(resultset.rows._array[0]);
//       },
//       (transact, err) => console.log("function getUsers", err)
//     );
//   });
// }
