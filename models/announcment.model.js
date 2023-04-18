module.exports = (sequelize, Sequelize) => {
    const Announcment = sequelize.define("announcment", {
      announcment: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
  
    return Announcment;
  };
  