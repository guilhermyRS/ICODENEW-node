const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/login", (req, res) => {
    res.render("components/forms/login");
});

router.get("/register", (req, res) => {
    res.render("components/forms/register");
});

router.get("/shop", (req, res) => {
    res.render("shop");
});



module.exports = router;