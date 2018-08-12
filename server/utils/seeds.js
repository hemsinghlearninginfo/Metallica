const promise = require('promise');
const userSeed = require('./userSeed');
const userRoleSeed = require('./userRoleSeed');

function seedDB() {

  var p0 = new Promise(() => {
    setTimeout(SeedingStart, 1000, 'one');
  });
  var p1 = new Promise(() => {
    setTimeout(userRoleSeed, 2000, 'two');
  });
  var p2 = new Promise(() => {
    setTimeout(userSeed, 3000, 'three');
  });

  Promise.all([p0, p1, p2])
    .then(() => console.log('----------- Seeding End -----------'))
    .catch(() => console.log('Error in methods seeding'))
}

function SeedingStart() {
  console.log('----------- Seeding Start -----------');
}
module.exports = seedDB;