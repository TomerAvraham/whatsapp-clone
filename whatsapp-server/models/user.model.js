const { Schema, model } = require("mongoose");
const isPasswordValid = require("../validators/password.validator");

const userSchema = new Schema({
  username: { type: String, require: true },
  password: {
    type: String,
    require: true,
    validate: {
      validator: isPasswordValid,
      message: "Please Provide valid password.",
    },
  },
  jwt_ac_token: { type: String },
  jwt_rf_token: { type: String },
});

const User = model("User", userSchema);

module.exports = User;
