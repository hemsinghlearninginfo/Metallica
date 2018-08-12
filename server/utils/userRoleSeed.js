const UserRole = require('../api/userrole/model');

const userRoleObjects = [
    {
        role: 'sysadmin', description: 'System Admin of all system'
    },
    {
        role: 'groupadmin', description: 'Group Admin to maintain own users'
    },
    {
        role: 'user', description: 'Normail User'
    }
];

function userRoleSeed() {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing') {
        UserRole.estimatedDocumentCount({}, (err, count) => {
            if (count < 1) {
                userRoleObjects.forEach((r) => {
                    const newUserRole = new UserRole({
                        role: r.role,
                        description: r.description
                    });
                    newUserRole.save();
                });
                console.log('User Role Seed Done');
            }
        });
    }
}

module.exports = userRoleSeed;