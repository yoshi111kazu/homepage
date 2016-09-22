var app = app || {};

(function(app) {
	app.BlogView = Backbone.Marionette.ItemView.extend({
		template: '#Blog-template',
	});
})(app);
