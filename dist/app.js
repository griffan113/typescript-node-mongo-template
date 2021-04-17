"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _router = require('./router'); var _router2 = _interopRequireDefault(_router);

class App {
  

   constructor() {
    this.express = _express2.default.call(void 0, );
    this.routes();
    this.middlewares();
    this.database();
  }

   middlewares() {
    this.express.use(_cors2.default.call(void 0, ));
    this.express.use(_express2.default.json());
  }

   routes() {
    this.express.use("/api", _router2.default);
  }

   database() {
    _mongoose2.default
      .connect(process.env.MONGODB_URI, {
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log("Connected to database."));
  }
}

exports. default = new App().express;
