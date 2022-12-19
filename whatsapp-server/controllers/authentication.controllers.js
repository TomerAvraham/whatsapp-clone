const {
  loginRequestSchema,
} = require("../validators/schema/authRequests.schema");
const requestValidator = require("../validators/request.validator");
const User = require("../models/user.model");
const { UnauthorizeError, NotFoundError } = require("../errors/Errors");

exports.login = async (req, res, next) => {
  try {
    await requestValidator(loginRequestSchema, req.body, next);

    const newUser = new User({ username: "test", password: "Password1" });
    await newUser.save();
    console.log(newUser);
    // const { username, password } = req.body;
    // const user = User.findOne({ username });
    // if (!user) next(new NotFoundError());
    // const isPasswordMatch = await user.comparePassword(password);
    // if (!isPasswordMatch) next(new UnauthorizeError());
    res.send("Token");
  } catch (error) {
    console.log(error);
    next();
  }
};
