var app = app || {};

(function(app) {
	app.Application = Backbone.Marionette.Application.extend({
		initialize : function(){ new app.MainRouter(); },
		onStart : function(){ Backbone.history.start(); },
		regions : {
			mainRegion : '#main'
		}

	});

	app.application = new app.Application();
	app.application.start();

})(app);
