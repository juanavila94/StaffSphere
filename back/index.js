require('dotenv').config()
const server = require('./src/app');
const db = require('./src/models/index');
const PORT = process.env.PORT || 3001;


// db.sequelize.authenticate(() => {
//     console.log('DB connected')
// }).then(
// server.listen(PORT, () => {
// console.log(`Server connected on ${PORT}` )
// }));

db.sequelize.authenticate()
  .then(() => {
    console.log('DB connected');
    server.listen(PORT, () => {
      console.log(`Server connected on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

////////////////////////////////////////////

