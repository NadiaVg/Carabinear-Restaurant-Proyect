const path = require('path');

module.exports = {
    "devServer": {
        "historyApiFallback": true,
        "proxy": {
          "/api": {
            "target" : "http://localhost:8080",
            "secure": false
          }
        }
      }
}