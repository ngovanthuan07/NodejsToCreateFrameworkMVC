class Application {
  _constructor(req, res) {
    this.req = req;
    this.res = res;
    this.router = require("./Router");
    this.router._constructor(this.req, this.res);
  }

  getRequest() {
    return this.req;
  }

  getResponse() {
    return this.res;
  }

  getRouter() {
    return this.router;
  }

  run() {
    this.router.resolve();
  }
}

module.exports = new Application();
