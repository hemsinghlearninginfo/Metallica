const UserRole = require('./model');

module.exports = {
  saveUserRole,
  getUserRole
}

// Register new user
function saveUserRole(req, res, next) {
  const role = req.body.role ? req.body.role.trim() : '';
  const role = req.body.description ? req.body.description.trim() : '';

  if (!role) {
    return res
      .status(422)
      .send({ error: 'User Role are required.' });
  }

  // Check if email already exists
  UserRole.findOne({ role: role}, function(err, existingUserRole) {
    if (err) return next(err);

    // if the email exists return error
    if (existingUserRole && existingUserRole.role.length > 0) {
      return res
        .status(422)
        .send({ error: 'The role is already registered.' });
    }

    // Create a new user object
    const newUserRole = new UserRole({
      role: role,
      description: description
    });

    // Save the new user into the database
    newUserRole.save(function(err, userRoleData) {
      if (err) return next(err);

      // Respond to request indicating that the user was created
      return res.json({
        userRole: {
          id: userRoleData._id,
          role: userRoleData.role,
          description: userRoleData.description
        }
      });
    });

  });
};

// Get one user
function getUserRole(req, res, next) {
  UserRole.findById(req.params.id)
    .exec()
    .then((userRole) => {
      if (!userRole || userRole.email.length <= 0) {
        return next(new Error('No user role with that id'));
      }
      return res.json(userRole)
    })
    .catch(err => next(err));
};