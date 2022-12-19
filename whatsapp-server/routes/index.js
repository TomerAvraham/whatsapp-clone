const router = require("express").Router();
const { NotFoundError } = require("../errors/Errors");

router.use("/auth", require("./authentication.routes"));

// Handle not found requests
router.all("*", (req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
