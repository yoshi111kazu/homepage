var app = app || {};

(function(app) {
	app.MainController = Backbone.Marionette.Controller.extend({

		Top : function() { this.nextView(app.TopView); },
		NewsMusicOverseaLists : function() { this.nextView(app.NewsMusicOverseaLayoutView); },
		NewsMusicItemLists : function() { this.nextView(app.NewsMusicItemLayoutView); },
		NewsItItLists : function() { this.nextView(app.NewsItItLayoutView); },
		NewsItProgramLists : function() { this.nextView(app.NewsItProgramLayoutView); },
		NewsItInfraLists : function() { this.nextView(app.NewsItInfraLayoutView); },
		NewsItPostingLists : function() { this.nextView(app.NewsItPostingLayoutView); },
		NewsItCompanyLists : function() { this.nextView(app.NewsItCompanyLayoutView); },
		NewsItYuruLists : function() { this.nextView(app.NewsItYuruLayoutView); },
		NewsItLinkLists : function() { this.nextView(app.NewsItLinkView); },
		NewsHealthLists : function() { this.nextView(app.NewsHealthLayoutView); },
		NewsCarLists : function() { this.nextView(app.NewsCarLayoutView); },
		NewsGameLists : function() { this.nextView(app.NewsGameLayoutView); },
		BlogLists : function() { this.nextView(app.BlogLayoutView); },

		nextView : function(View, option) {
			app.application.mainRegion.show(new View(option));
		},

	});

	app.MainRouter = Backbone.Marionette.AppRouter.extend({

		controller: new app.MainController(),
		appRoutes : {
			''					: 'NewsMusicOverseaLists',
			'NewsMusicOversea'	: 'NewsMusicOverseaLists',
			'NewsMusicItem'		: 'NewsMusicItemLists',
			'NewsItIt'			: 'NewsItItLists',
			'NewsItProgram'		: 'NewsItProgramLists',
			'NewsItInfra'		: 'NewsItInfraLists',
			'NewsItPosting'		: 'NewsItPostingLists',
			'NewsItCompany'		: 'NewsItCompanyLists',
			'NewsItYuru'		: 'NewsItYuruLists',
			'NewsItLink'		: 'NewsItLinkLists',
			'NewsHealth'		: 'NewsHealthLists',
			'NewsCar'			: 'NewsCarLists',
			'NewsGame'			: 'NewsGameLists',
			'Blog'				: 'BlogLists'
		},
	});

	app.Application = Backbone.Marionette.Application.extend({

		initialize : function(){ new app.MainRouter(); },
		onStart : function(){ Backbone.history.start(); },
		regions : {
			mainRegion : '#main_cont'
		}

	});

	app.application = new app.Application();
	app.application.start();

})(app);
