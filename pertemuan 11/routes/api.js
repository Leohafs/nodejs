// import StudentController
const StudentController = require("../controllers/StudentController")
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * membuat routing
 */
router.get("/",(req, res) => {
    res.send("Hello express js");
});

router.get("/students",StudentController.index);
router.post("/students",StudentController.store);
router.put("/students/:id",StudentController.update);
router.delete("/students/:id",StudentController.destroy);

// export router
module.exports = router;