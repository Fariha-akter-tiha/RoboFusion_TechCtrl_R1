const express = require("express");
const cors = require("cors");

const db = require("./database/db");
const zoneRoutes = require("./routes/zones");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/zones", zoneRoutes);

app.get("/", (req, res) => {

    res.send("Smart Campus Backend Running");

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});