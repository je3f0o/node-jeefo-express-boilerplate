/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : main.js
* Purpose    :
* Created at : 2015-10-14
* Updated at : 2015-10-14
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

(function () {
var base_url = location.protocol + "//" + location.host;

require.config({
	appDir  : "",
	baseUrl : base_url + "/js",
	paths   : {
		// Configure alias to full paths
		"angular"               : "../bower_components/angular/angular.min",
		"angularAnimate"        : "../bower_components/angular-animate/angular-animate.min",
		"angularMessages"       : "../bower_components/angular-messages/angular-messages.min",
		"angularResource"       : "../bower_components/angular-resource/angular-resource.min",
		"angularUiRounter"      : "../bower_components/angular-ui-router/release/angular-ui-router.min",
	},

	shim : {
		"angular"              : { exports : "angular" },
		"angularAnimate"       : ["angular"],
		"angularMessages"      : ["angular"],
		"angularResource"      : ["angular"],
		"angularUiRounter"     : ["angular"],
	},

	priority : ["angular"]
});

require([
	"angular",
	"angularAnimate",
	"angularMessages",
	"angularResource",
	"angularUiRounter"
], function () {
	var app_name = "longBinaryCity",
		depends  = [
			"ngAnimate", 
			"ngMessages",
			"ngResource",
			"ui.router"
		];
	
	var app = angular.module(app_name, depends);
	app.constant("BASE_URL", base_url);

	app.run(function(
		$rootScope, $state, $location
	) {
		$rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
			console.error("state change", fromState, toState, error);
			switch (error.status) {
			case 401:
				if (fromState.name !== "main.app.login") {
					console.warn("[debug] UNAUTHORZIED AND REDIRECTED!");
					$state.transitionTo("main.public.login");
				}
				break;
			case 403:
				if (fromState.name === "") {
					console.warn("[debug] FORBIDDEN AND REDIRECTED!");
					// $state.transitionTo("main.app.user.profile");
				}

				// if (user_service.is_authenticated()) {
					// $state.transitionTo("main.app.users.profile");
				// }
				break;
			case 404:
				$state.transitionTo("main.app.error404");
				break;
			}
		});

		$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
			delete $rootScope.alert;
			/*
			var mode = toParams.mode,
				id   = toParams.id;

			if (toState.name.lastIndexOf("editor") !== -1) {
				if (["add", "edit"].indexOf(mode) === -1) {
					event.preventDefault();
					$state.transitionTo("main.app.home");
				} else if (mode === "edit") {
					if (! HelpersService.is_id_number(id)) {
						event.preventDefault();
						$state.transitionTo("main.app.home");
					}
				}
			}
			*/

			// console.log(navigation_service.is_in_editor_mode, toState.name);
		});

		$rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
			// navigation_service.is_in_editor_mode = toState.name.lastIndexOf("editor") !== -1;
			// navigation_service.state = toState.name;


			// console.log(NavigationService.is_in_editor_mode, toState.name);
			// console.log(toParams);
		});
	});
	
	angular.bootstrap(document, [app_name]);

	return app;
});

}());
