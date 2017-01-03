var app = app || {};

(function(app) {
	app.NewsMusicOverseaModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=music_oversea', parse : function(response) { return response; } });
	app.NewsMusicItemModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=music_item', parse : function(response) { return response; } });
	app.NewsItItModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=it_it', parse : function(response) { return response; } });
	app.NewsItProgramModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=it_program', parse : function(response) { return response; } });
	app.NewsItInfraModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=it_infra', parse : function(response) { return response; } });
	app.NewsItPostingModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=it_posting', parse : function(response) { return response; } });
	app.NewsItCompanyModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=it_company', parse : function(response) { return response; } });
	app.NewsItYuruModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=it_yuru', parse : function(response) { return response; } });
	app.NewsHealthModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=health', parse : function(response) { return response; } });
	app.NewsCarModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=car', parse : function(response) { return response; } });
	app.NewsGameModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=game', parse : function(response) { return response; } });
	app.BlogModel = Backbone.Model.extend({ urlRoot : '/api/get_rss.php?genre=blog', parse : function(response) { return response; } });
})(app);
