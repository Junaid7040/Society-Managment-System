const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index");

const adminRoutes = require("./routes/admin.routes");
const timetableRoutes = require("./routes/timetable.routes");

const announcmentRoutes = require("./routes/announcment.routes");
const adCommAnoucRoutes = require("./routes/adCommAnouc.routes");
const adCommBlogRoutes = require("./routes/adCommBlog.routes");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use("/api/admins", adminRoutes);
app.use("/api/timetables", timetableRoutes);

app.use("/api/announcments", announcmentRoutes);
app.use("/api/adCommAnoucs", adCommAnoucRoutes);
app.use("/api/adCommBlogs", adCommBlogRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD Application!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.01:${PORT} .`);
});
