/* global require, process */
var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 4567;



app.all("*", function (req, res, next) {
	"use strict";
	res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    next();
});


app.get("/", function (req, res) {
	"use strict";
    
	var delay = 0,
	result = {
		ok: true,
        status: 200,
        name: "XHR_1",
        latency: delay,
        reference: req.query.stamp
    };
    res.json(result);
});

app.get("/delay", function (req, res) {
	"use strict";

	var delay = 2500,
	result = {
		ok: true,
        status: 200,
        name: "XHR_1",
        latency: delay,
        reference: req.query.stamp
    };

    setTimeout(function () {
    	res.json(result);	
    }, delay);
    
});

app.listen(port);