const express = require("express"), app = express(),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    usersController = require("./controllers/usersController"),
    layouts = require("express-ejs-layouts"), mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/lets_take_a_selfie",
    { useNewUrlParser: true });

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", homeController.showIndex);

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.post("/", usersController.saveUser);
app.post("/home", usersController.logIn);

app.get("/search", homeController.showResults);
app.get("/settings", homeController.showSettings);
app.get("/account", homeController.showAccount);

// error handling
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`)
});