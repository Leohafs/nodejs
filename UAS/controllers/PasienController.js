const Pasien = require("../models/Pasien");

class PasienController {
    // menggunakan method Promise + async await solution
    // menggunakan controller (index) untuk menampilkan seluruh data Pasien...
    async index(req, res) {
        try {
            const pasiens = await Pasien.all();
            res.status(200).json({
                message: "Get All Resource",
                data: pasiens
            });
        } catch (err) {
            res.status(200).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (store) untuk menambahkan data Pasien...
     async store(req, res) {
        try {
            const { name, phone, address, status, in_date_at, out_date_at } = req.body;
            const createData = await Pasien.create(name, phone, address, status, in_date_at, out_date_at);
            const pasiens = await Pasien.find(createData.insertId);
            res.status(201).json({
                message: "Menambahkan data pasiens",
                data: pasiens,
            });
        } catch (err) {
            res.status(422).json({
                message: err
            });
        }
     }

    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (update) untuk mengubah atau mengupdate data Pasien...
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, phone, address, status, in_date_at, out_date_at } = req.body;
            await Pasien.update(id, name, phone, address, status, in_date_at, out_date_at);
            const updatedData = await Pasien.find(id);
            res.status(200).json({
                message: "Update data students berhasil",
                data: updatedData
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (destroy) untuk menghapus data Pasien berdasarkan parameter{id}...
    async destroy(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await Pasien.find(id);
            await Pasien.delete(id);
            res.status(200).json({
                message: "Data students berhasil dihapus",
                data: deletedData
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (show) untuk menampilkan data pasien menggunakan {id}...
    async show(req, res) {
        try {
            const { id } = req.params;
            const pasiens = await Pasien.find(id);
            res.status(200).json({
                message: "Data pasiens sesuai id",
                data: pasiens
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (search) untuk mencari data pasien berdasarkan nama...
    async search(req, res) {
        try {
            const { name } = req.params;
            const pasiens = await Pasien.search(name);
            res.status(200).json({
                message: `Get searched resource "${name}"`,
                data: pasiens,
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (positive) untuk menampilkan data pasien yang Status positif...
    async positive(req, res) {
        try {
            const pasiens = await Pasien.findByStatus();
            res.status(200).json({
                message: "Get positive resource",
                data: pasiens
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (recovered) untuk menampilkan data pasien yang Status sembuh...
    async recovered(req, res) {
        try {
            const pasiens = await Pasien.recovered();
            res.status(200).json({
                message: "Get recovered resource",
                data: pasiens
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //menggunakan controller (dead) untuk menampilkan data pasien yang Status meninggal...
    async dead(req, res) {
        try {
            const pasiens = await Pasien.dead();
            res.status(200).json({
                message: "Get dead resource",
                data: pasiens
            });
        } catch (err) {
            res.status(404).json({
                message: err
            });
        }
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// membuat object PasienController
const object = new PasienController();

// export object PasienController
module.exports = object;