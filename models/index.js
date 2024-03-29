const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.admins = require("./admin.model.js")(sequelize, Sequelize);
db.timetables = require("./timetable.model.js")(sequelize, Sequelize);
db.commBlogs = require("./commBlog.model.js")(sequelize, Sequelize);
db.blogWrites = require("./blogWrite.model.js")(sequelize, Sequelize);
db.commAnoucs = require("./commAnouc.model.js")(sequelize, Sequelize);
db.announcments = require("./announcment.model.js")(sequelize, Sequelize);
db.adCommAnoucs = require("./adCommAnouc.model.js")(sequelize, Sequelize);
db.adCommBlogs = require("./adCommBlog.model.js")(sequelize, Sequelize);

module.exports = db;
