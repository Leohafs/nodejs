// import database
const db = require("../config/database");

// membuat class Pasien
class Pasien {

// Promise + async await solution =~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (all) untuk menampilkan seluruh data Pasien...
     static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM pasiens";
            db.query(query, (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Data is empty");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (create) untuk menambahkan data Pasien...
    static create(name, phone, address, status, in_date_at, out_date_at) {
        return new Promise((resolve, reject) => {
            if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
                reject("Data harus diisi");
            }
            const query = "INSERT INTO pasiens (name, phone, address, status, in_date_at, out_date_at) VALUES (?,?,?,?,?,?)";
            db.query(query, [name, phone, address, status, in_date_at, out_date_at], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    

    //menggunakan model (update) untuk mengubah atau mengupdate data Pasien...
    static update(id, name, phone, address, status, in_date_at, out_date_at) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE pasiens SET name = ?, phone = ?, address = ?, status = ?, in_date_at = ?, out_date_at = ? WHERE id = ?";
            db.query(query, [name, phone, address, status, in_date_at, out_date_at, id], (err, results) => {
                if (err) reject(err);
                if (!results.affectedRows) reject("Resource not found");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (delete) untuk menghapus data Pasien berdasarkan parameter{id}...
    static delete(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM pasiens WHERE id = ?";
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                if (!results.affectedRows) reject("Resource not found");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (find) untuk menampilkan data pasien menggunakan {id}...
    static find(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM pasiens WHERE id = ?";
            db.query(query, [id], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Resource not found");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (search) untuk mencari data pasien berdasarkan nama...
    static search(name) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM pasiens WHERE name LIKE ?";
            db.query(query, [`%${name}%`], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Resource not found");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (findByStatus) untuk menampilkan data pasien yang Status positif...
    static findByStatus() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM pasiens WHERE status LIKE 'positif'";
            db.query(query, (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Resource not found");
                resolve(results);
            });
        });
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (recovered) untuk menampilkan data pasien yang Status sembuh...
    static recovered() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM pasiens WHERE status LIKE 'sembuh'";
            db.query(query, (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Resource not found");
                resolve(results);
            });
        });
    }
    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan model (dead) untuk menampilkan data pasien yang Status meninggal...
    static dead() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM pasiens WHERE status LIKE 'meninggal'";
            db.query(query, (err, results) => {
                if (err) reject(err);
                if (!results.length) reject("Resource not found");
                resolve(results);
            });
        });
    }
}

// export class Pasien
module.exports = Pasien;