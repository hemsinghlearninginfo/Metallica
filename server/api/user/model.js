const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true, default: '' },
  lastName: { type: String, required: true, default: '' },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "userRole" }
});

UserSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (error, hashed) {
      if (error) return next(error);

      user.password = hashed;
      next();
    });

  });
});

UserSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password);
};

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', UserSchema);