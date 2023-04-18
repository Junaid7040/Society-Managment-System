module.exports = (sequelize, Sequelize) => {
    const AdCommBlog = sequelize.define("adCommBlog", {
      comment: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
  
    return AdCommBlog;
  };
  