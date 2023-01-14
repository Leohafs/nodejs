const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        try {
            const students = await Student.all();
            res.status(200).json({
                message: "Data students",
                data: students
            });
        } catch (err) {
            res.status(200).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

     async store(req, res) {
        try {
            const { nama, nim, email, jurusan } = req.body;
            const createData = await Student.create(nama, nim, email, jurusan);
            const student = await Student.find(createData.insertId);
            res.status(201).json({
                message: "Menambahkan data students",
                data: student,
            });
        } catch (err) {
            res.status(422).json({
                message: err
            });
        }
     }

    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nama, nim, email, jurusan } = req.body;
            await Student.update(id, nama, nim, email, jurusan);
            const updatedData = await Student.find(id);
            res.status(201).json({
                message: "Update data students berhasil",
                data: updatedData
            });
        } catch (err) {
            res.status(500).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await Student.find(id);
            await Student.delete(id);
            res.status(201).json({
                message: "Data students berhasil dihapus",
                data: deletedData
            });
        } catch (err) {
            res.status(500).json({
                message: err
            });
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    async show(req, res) {
        try {
            const { id } = req.params;
            const student = await Student.find(id);
            res.status(201).json({
                message: "Data student sesuai id",
                data: student
            });
        } catch (err) {
            res.status(500).json({
                message: err
            });
        }
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// async index(req, res) {
    //     //memanggil method static all dengan async await.
    //     const students = await students.all();

    //     const data = {
    //         message: "Menampilkan semua students",
    //         data: students,
    //     };
    //     res.json(data);}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// store(req, res) {
    //     const {nama} = req.body;
    //     students.push(nama)
    //     const data = {
    //         message: `Menambahkan data students ${nama}`,
    //         data: students,
    //     };
    //     res.json(data);
    // }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  update(req, res) {
    //      const {id} = req.params;
    //      const {nama} = req.body;

    //      students[id] = nama;

    //      const data = {
    //          message: `Mengedit data students ${id}, nama ${nama}`,
    //          data: students,
    //      };
    //      res.json(data);
    //  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  destroy(req, res) {
    //      const {id} = req.params;

    //      students.splice(id,1);
        
    //      const data = {
    //          message: `Menghapus data students ${id}`,
    //          data: students,
    //      };
    //      res.json(data);
    //  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// membuat object StudentController
const object = new StudentController();

// export object StudentController
module.exports = object;