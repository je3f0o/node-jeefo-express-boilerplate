"use strict";

var server = require("./server"),
	port   = process.env.PORT || 80;

server.listen(port, function () {
	if (process.env.NODE_ENV !== "production") {
		require("my-browser-sync")(port);
	}
});
