const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserRoleSchema = new mongoose.Schema({
  role: { type: String, required: true, unique: true },
  description: { type: String, default: '' },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

UserRoleSchema.plugin(uniqueValidator);

module.exports = mongoose.model('userRole', UserRoleSchema);
