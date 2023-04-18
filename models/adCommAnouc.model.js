module.exports = (sequelize, Sequelize) => {
    const AdCommAnouc = sequelize.define("adCommAnouc", {
      comment: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
  
    return AdCommAnouc;
  };
  