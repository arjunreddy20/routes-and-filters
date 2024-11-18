const express = require("express");
const router = express.Router();

router.get("/",(req, res, next) => {
    //console.log("in the sec middleware");
    res.send("<form action = '/shop/'><h1>Hello from ExpressJS!</h1></form>");
});
module.exports = router;