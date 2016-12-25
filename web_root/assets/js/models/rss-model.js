var app = app || {};

(function(app) {
	app.NewsMusicModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=music',
		parse : function(response) { return response; }
	});
	app.NewsItItModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=it_it',
		parse : function(response) { return response; }
	});
	app.NewsItProgramModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=it_program',
		parse : function(response) { return response; }
	});
	app.NewsItInfraModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=it_infra',
		parse : function(response) { return response; }
	});
	app.NewsItYuruModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=it_yuru',
		parse : function(response) { return response; }
	});
	app.NewsHealthModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=health',
		parse : function(response) { return response; }
	});
	app.NewsCarModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=car',
		parse : function(response) { return response; }
	});
	app.NewsGameModel = Backbone.Model.extend({
		urlRoot : '/api/get_rss.php?genre=game',
		parse : function(response) { return response; }
	});
})(app);
