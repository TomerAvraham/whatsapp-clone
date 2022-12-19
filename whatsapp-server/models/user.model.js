const { Schema, model } = require("mongoose");
const isPasswordValid = require("../validators/password.validator");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

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

userSchema.pre("save", async function (next) {
  var user = this;
  bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = async function (plainPassword) {
  const isMatch = await bcrypt.compare(plainPassword, this.password);
  return isMatch;
};

const User = model("User", userSchema);

module.exports = User;
