// import controller
const siteController = require("../controllers/SiteController");

// import app
const app = require("../core/Application");

const http = require("http");
const server = http.createServer((req, res) => {
  // init constructor
  app._constructor(req, res);

  // init router
  app.getRouter().get("/", siteController.index);
  app.getRouter().get("/home", siteController.index);
  app.getRouter().get("/show", siteController.show);

  app.run();
});
server.listen(3000);
