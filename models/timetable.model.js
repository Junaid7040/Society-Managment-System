module.exports = (sequelize, Sequelize) => {
    const Timetable = sequelize.define("timetable", {
      slot: {
        type: Sequelize.STRING,
      },
      days: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
  
    return Timetable;
  };
  