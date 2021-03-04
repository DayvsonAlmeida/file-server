const { Router } = require("express");
const fileUpload = require("express-fileupload");

const upload = require("./upload");

const router = Router();

router.use(fileUpload());
router.post("/upload", upload);

module.exports = router;
