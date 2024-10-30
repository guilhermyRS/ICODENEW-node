const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const db = require("./database/database.js");
const appRoutes = require("./routes/appRoutes.js");

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use("/", appRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});