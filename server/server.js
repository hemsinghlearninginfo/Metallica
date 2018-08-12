const app = require('./index');
const config = require('./config/config');

// const Restaurant = require('./server/api/restaurant/restaurantModel');

require('./utils/seeds')();
  
app.listen(config.port, () => {
  console.log(`Connected to http://localhost:${config.port}`);
});

