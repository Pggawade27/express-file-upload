const express = require("express")
const { handleFile, fileUpload } = require("../controller/controller")

const router = express.Router()

router.post("/handle_file", handleFile)
router.post("/upload_file", fileUpload)
module.exports = router