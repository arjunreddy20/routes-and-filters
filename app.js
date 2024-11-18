
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const adminRoutes = require("./routes/admin");
const ShopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({extended : false}));
//next() allows to execute next function

app.use("/shop",ShopRoutes);
app.use("/admin",adminRoutes);

app.use((req,res,next) => {
    res.status(404).send("<h1> Page not Found")
})
app.listen(3000);