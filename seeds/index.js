const sdEntry = require('./post-seeds');

const sdPerson = require('./user-seeds');

const sdMessage = require('./comment-seeds');

const sequelize = require('../config/connection');

const sdThis = async () => {

  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE ADDED ---\n');
  
  await sdEntry();
    console.log('\n-- USERS ADDED -----\n');
  
  await sdPerson();
    console.log('\n---POSTS ADDED -----\n');

  await sdMessage();
    console.log('\n----- COMMENTS ADDED -----\n');

  process.exit(0);
};

sdThis();