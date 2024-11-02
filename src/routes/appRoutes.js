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

router.get("/loja", (req, res) => {
    res.render("shop");
});

router.get("/view", (req, res) => {
    res.render("view-product");
});

module.exports = router;