"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv');
_dotenv.config.call(void 0, );
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.PORT;

_app2.default.listen(port, () => {
  console.log("Running on port: " + port);
});
