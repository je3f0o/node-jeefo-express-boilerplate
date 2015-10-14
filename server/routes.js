/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : routes.js
* Purpose    :
* Created at : 2015-10-14
* Updated at : 2015-10-14
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

module.exports = function (app) {

app.get("/", function (req, res) {
	res.render("index");
});

};
