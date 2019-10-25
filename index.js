let express = require('express');
let app = express();
let config = require('./config');
let cors = require('cors');
function service(){
    app.use(cors());
    app.get("/oauth", require('./oauth/index'));
    app.get("/*", express.static("./user-panel-font-end/build"));
    app.listen(config.listenOnPort);
}

service();