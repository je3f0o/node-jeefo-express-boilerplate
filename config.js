
"use strict";

var path     = require("path"),
	base_dir = process.cwd();

process.env.SECRET_TOKEN = process.env.SECRET_TOKEN || "Awesome secret code";

module.exports = {
	database: {
		adapter          : "mysql",
		host             : "127.0.0.1",
		user             : "root",
		password         : "",
		db_name          : "ineg",
		multi_statements : true
	},

	bower_dir  : "/root/Desktop/bower",
	base_dir   : base_dir,
	server_dir : path.join(base_dir, "server"),
	views_dir  : path.join(base_dir, "server", "views"),
	public_dir : path.join(base_dir, "public")
};
