const controller = require("../controllers/content.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/menu", controller.content);
  app.get("/menu:title", controller.contentCategory);
};
