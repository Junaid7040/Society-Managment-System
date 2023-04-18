module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
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
  
    return Admin;
  };
  