// server.js
require("dotenv").config(); //added
const express = require("express");
const cors = require("cors"); 

const connectDB = require("./config/db"); //added
const middleware = require("./middleware/verify");
const app = express();

const profile = require("./routes/profile");
const auth = require("./routes/auth");
// connect database
connectDB();//added

app.use(cors());

// initialize middleware
app.use(express.json({ extended: false }));


app.get("/", (req, res) => res.send("Server up and running"));
app.use("/api/auth", auth);
app.use("/api/profile", profile);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});