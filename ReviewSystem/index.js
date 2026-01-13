// const express = require("express");
// const app = express();
// const UserRoutes = require("./routes/User");
// const ContactRoutes = require("./routes/Contact");
// const CardRoutes = require("./routes/Card")

// require("dotenv").config();

// const PORT = process.env.PORT || 3000


// //database connection
// const dbConnect = require("./config/database");
// dbConnect();

// //cloudinary
// const cloudinary = require("./config/cloudinary");
// cloudinary();

// //midelware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// const fileUpload = require("express-fileupload");
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// //Routes
// app.use("/api/v1/user",UserRoutes);
// app.use("/api/v1/card",CardRoutes);
// app.use("/api/v1/contact",ContactRoutes);

// app.listen(PORT,()=>{
//     console.log(`App is Running on ${PORT}`);
// })
const express = require("express");
const app = express();
const UserRoutes = require("./routes/User");
const ContactRoutes = require("./routes/Contact");
const CardRoutes = require("./routes/Card");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

//database connection
const dbConnect = require("./config/database");
dbConnect();

// ✅ just import config, NO need to call
require("./config/cloudinary");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//Routes
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/card", CardRoutes);
app.use("/api/v1/contact", ContactRoutes);

app.listen(PORT, () => {
  console.log(`App is Running on ${PORT}`);
});
