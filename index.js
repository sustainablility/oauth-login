let express = require('express');
let app = express();
let config = require('./config');
let cors = require('cors');
function service(){
    app.use(cors());
    app.get("/oauth", require('./oauth/index'));
    app.use("/",express.static("./homepage"));
    app.use("/user-panel", express.static("./user-panel-font-end/build"));
    app.use("/procedure-editor",express.static("./procedure-editor-font-end/build"));
    app.use("/data-visualize", express.static("./data-visualizing/build"));
    app.listen(config.listenOnPort);
}

service();