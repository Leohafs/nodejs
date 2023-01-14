// import StudentController
const PasienController = require("../controllers/PasienController")
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * membuat routing
 */

router.get("/pasiens",PasienController.index);
router.post("/pasiens",PasienController.store);
router.put("/pasiens/:id",PasienController.update);
router.delete("/pasiens/:id",PasienController.destroy);
router.get("/pasiens/:id",PasienController.show)
router.get("/pasiens/search/:name",PasienController.search)
router.get("/pasiens/status/positive",PasienController.positive)
router.get("/pasiens/status/recovered",PasienController.recovered)
router.get("/pasiens/status/dead",PasienController.dead)

// export router
module.exports = router;