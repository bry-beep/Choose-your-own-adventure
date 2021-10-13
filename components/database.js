import React from 'react'
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('db.db');

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists stages (id integer primary key not null unique, text text not null, options );'
      );
    },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success) }
    )
  })
}

// const dropDatabaseTablesAsync = async () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'drop table stages',
//         [],
//         (_, result) => { resolve(result) },
//         (_, error) => { console.log("error dropping users table"); reject(error)
//         }
//       )
//     })
//   })
// }

const setupStagesAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( 'insert into stages (id, name) values (?,?)', [1, "john"] );
      },
      (t, error) => { console.log("db error insertStage"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

const getStages = (setStagesFunc) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM stages', null,
      (txObj, { rows: { _array } }) => this.setState({ data: _array }),
        (txObj, error) => console.log('Error ', error)
    )
})
}

export const database = {
  getStages,
  setupDatabaseAsync,
  setupStagesAsync,
  //dropDatabaseTablesAsync,
}
