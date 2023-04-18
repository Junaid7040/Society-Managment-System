module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    rollno: {
      type: Sequelize.STRING,
    },
    phno: {
      type: Sequelize.STRING,
    },
    // published: {
    //   type: Sequelize.BOOLEAN,
    // },
  });

  return User;
};
