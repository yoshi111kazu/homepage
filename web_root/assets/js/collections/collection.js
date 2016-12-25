var app = app || {};

(function(app) {
	app.NewsMusicCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=music',
		model : app.NewsMusicModel,
		parse : function(response) { return response; }
	});
	app.NewsItItCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_it',
		model : app.NewsItItModel,
		parse : function(response) { return response; }
	});
	app.NewsItProgramCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_program',
		model : app.NewsItProgramModel,
		parse : function(response) { return response; }
	});
	app.NewsItInfraCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_infra',
		model : app.NewsItInfraModel,
		parse : function(response) { return response; }
	});
	app.NewsItYuruCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_yuru',
		model : app.NewsItYuruModel,
		parse : function(response) { return response; }
	});
	app.NewsHealthCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=health',
		model : app.NewsHealthModel,
		parse : function(response) { return response; }
	});
	app.NewsCarCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=car',
		model : app.NewsCarModel,
		parse : function(response) { return response; }
	});
	app.NewsGameCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=game',
		model : app.NewsGameModel,
		parse : function(response) { return response; }
	});
})(app);
