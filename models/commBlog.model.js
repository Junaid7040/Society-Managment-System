module.exports = (sequelize, Sequelize) => {
    const CommBlog = sequelize.define("commBlog", {
      comment: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
  
    return CommBlog;
  };
  