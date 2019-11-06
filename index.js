const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const MongoDBStore = require("connect-mongodb-session")(session);
require("dotenv").config();
const cors = require("cors");
const models = require("./models");
const app = express();
//---------- routes--------------------
const user = require("./routes/user");
const election = require("./routes/election");
//---------- routes--------------------

var store = new MongoDBStore({
  uri: process.env.mongoURI,
  collection: "mySessions"
});

store.on("error", function(error) {
  assert.ifError(error);
  assert.ok(false);
});

app.use(
  session({
    store: store,
    secret: "SEKR37",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    resave: true,
    saveUninitialized: true
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/user", user);
app.use("/election", election);

if (["production", "ci"].includes(process.env.NODE_ENV)) {
}

const PORT = process.env.PORT;
models.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
  });
});

