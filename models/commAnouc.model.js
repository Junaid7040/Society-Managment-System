module.exports = (sequelize, Sequelize) => {
    const CommAnouc = sequelize.define("commAnouc", {
      comment: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
  
    return CommAnouc;
  };
  