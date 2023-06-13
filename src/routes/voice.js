const router = require("express").Router();
const voice = require("../controllers/voice.controller");

router.post("/", voice.interview);
router.post("/adventure/migrate", voice.migrate);

module.exports = router;
