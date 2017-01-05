var app = app || {};

(function(app) {
	app.MainController = Backbone.Marionette.Controller.extend({

		NewsMusicOverseaLists : function() { this.nextMainView(app.NewsMusicOverseaLayoutView); },
		NewsMusicItemLists : function() { this.nextMainView(app.NewsMusicItemLayoutView); },
		NewsItItLists : function() { this.nextMainView(app.NewsItItLayoutView); },
		NewsItProgramLists : function() { this.nextMainView(app.NewsItProgramLayoutView); },
		NewsItInfraLists : function() { this.nextMainView(app.NewsItInfraLayoutView); },
		NewsItPostingLists : function() { this.nextMainView(app.NewsItPostingLayoutView); },
		NewsItCompanyLists : function() { this.nextMainView(app.NewsItCompanyLayoutView); },
		NewsItYuruLists : function() { this.nextMainView(app.NewsItYuruLayoutView); },
		NewsItLinkLists : function() { this.nextMainView(app.NewsItLinkView); },
		NewsHealthLists : function() { this.nextMainView(app.NewsHealthLayoutView); },
		NewsCarLists : function() { this.nextMainView(app.NewsCarLayoutView); },
		NewsGameLists : function() { this.nextMainView(app.NewsGameLayoutView); },
		BlogLists : function() { this.nextMainView(app.BlogLayoutView); },

		nextMainView : function(View, option) {
			app.application.mainRegion.show(new View(option));
			app.application.blogRegion.show(new app.MyNewBlogLayoutView);
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
			mainRegion : '#main_cont',
			blogRegion : '#blog_cont'
		}

	});

	app.application = new app.Application();
	app.application.start();

})(app);
