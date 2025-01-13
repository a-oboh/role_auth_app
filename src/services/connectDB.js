import DB from '../database/index.js';
import sequelize from '../database/config/sequelize.js';
import associate from '../database/relationships/index.js';

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully🔥');

    // Synchronize the database with the models  without need of dropping the tables
    await DB.sequelize.sync({
      force: false,
    });

    associate(); // Call the associate function to create the relationships between the models
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export default connectDB;