const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const { router } = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.listen(port, () => {
    console.log("server listening on port ", port);
})

dbConnect();

// router.use("/api/v1", router);
app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("I'm on default route");
})