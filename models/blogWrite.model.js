module.exports = (sequelize, Sequelize) => {
    const BlogWrite = sequelize.define("blogWrite", {
      blog: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
      // published: {
      //   type: Sequelize.BOOLEAN,
      // },
    });
  
    return BlogWrite;
  };
  