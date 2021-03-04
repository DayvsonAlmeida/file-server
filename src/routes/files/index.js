const { Router } = require("express");
const fileUpload = require("express-fileupload");

const upload = require("./upload");
const download = require("./download");

const router = Router();

router.use(fileUpload());
router.post("/upload", upload);
router.get("/download/:hash", download);

module.exports = router;
