const router = require("express").Router();

router.use("/auth", require("./authentication.routes"));

module.exports = router;
