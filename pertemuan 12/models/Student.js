// import database
const db = require("../config/database");

// membuat class Student
class Student {
    //  // solution with callback
    //  static all(callback) {
    //      const query = "SELECT * FROM students";
    //      /**
    //       * melakukan query menggunakan method query
    //       * menerima 2 params: query dan callback
    //       */
    //      db.query(query, (err, results) => {
    //          callback (results);
    //      });
    //  }

     static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students";
            db.query(query, (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Data is empty");
                resolve(results);
            });
        });
    }

    // static all() {
    //     return new Promise((resolve, reject) => {
    //         const query = "SELECT * FROM students";

    //         db.query(query, (err, results) => {
    //             resolve(results);
    //         });
    //     });
    // }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    static create(nama, nim, email, jurusan) {
        return new Promise((resolve, reject) => {
            if (!nama || !nim || !email || !jurusan) {
                reject("Data harus diisi");
            }
            const query = "INSERT INTO students (nama, nim, email, jurusan) VALUES (?,?,?,?)";
            db.query(query, [nama, nim, email, jurusan], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    

    static update(id, nama, nim, email, jurusan) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE students SET nama = ?, nim = ?, email = ?, jurusan = ? WHERE id = ?";
            db.query(query, [nama, nim, email, jurusan, id], (err, results) => {
                if (err) reject(err);
                if (!results.affectedRows) reject("Data is empty");
                resolve(results);
            });
        });
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM students WHERE id = ?";
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                if (!results.affectedRows) reject("Data is empty");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    static find(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students WHERE id = ?";
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Data is empty");
                resolve(results);
            });
        });
    }
}

// export class Student
module.exports = Student;