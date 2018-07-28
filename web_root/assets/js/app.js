var app = app || {};

(function(app) {
	app.MainController = Backbone.Marionette.Controller.extend({

		TopLists : function() { this.nextMainView(app.TopItemView); },
		NewsTodayLists : function() { this.nextMainView(app.NewsTodayLayoutView); },
		NewsMusicOverseaLists : function() { this.nextMainView(app.NewsMusicOverseaLayoutView); },
		NewsMusicItemLists : function() { this.nextMainView(app.NewsMusicItemLayoutView); },
		NewsItItLists : function() { this.nextMainView(app.NewsItItLayoutView); },
		NewsItProgramLists : function() { this.nextMainView(app.NewsItProgramLayoutView); },
		NewsItPostingLists : function() { this.nextMainView(app.NewsItPostingLayoutView); },
		NewsItCompanyLists : function() { this.nextMainView(app.NewsItCompanyLayoutView); },
		NewsItLinkLists : function() { this.nextMainView(app.NewsItLinkView); },
		NewsHealthLists : function() { this.nextMainView(app.NewsHealthLayoutView); },
		NewsBusinessLists : function() { this.nextMainView(app.NewsBusinessLayoutView); },
		NewsOtherLists : function() { this.nextMainView(app.NewsOtherLayoutView); },
		ProfileLists : function() { this.nextMainView(app.ProfileItemView); },
		BlogLists : function() { this.nextMainView(app.BlogItemView); },

		nextMainView : function(View, option) {
			app.application.mainRegion.show(new View(option));
			//app.application.blogRegion.show(new app.MyNewBlogLayoutView);
		},
	});

	app.MainRouter = Backbone.Marionette.AppRouter.extend({

		controller: new app.MainController(),
		appRoutes : {
			//''					: 'TopLists',
			''					: 'NewsTodayLists',
			'NewsToday'			: 'NewsTodayLists',
			'NewsMusicOversea'	: 'NewsMusicOverseaLists',
			'NewsMusicItem'		: 'NewsMusicItemLists',
			'NewsItIt'			: 'NewsItItLists',
			'NewsItProgram'		: 'NewsItProgramLists',
			'NewsItPosting'		: 'NewsItPostingLists',
			'NewsItCompany'		: 'NewsItCompanyLists',
			'NewsItLink'		: 'NewsItLinkLists',
			'NewsHealth'		: 'NewsHealthLists',
			'NewsBusiness'		: 'NewsBusinessLists',
			'NewsOther'			: 'NewsOtherLists',
			'Profile'			: 'ProfileLists',
			'Blog'				: 'BlogLists'
		},
	});

	app.Application = Backbone.Marionette.Application.extend({

		initialize : function(){ new app.MainRouter(); },
		onStart : function(){ Backbone.history.start(); },
		regions : {
			mainRegion : '#main_cont'
			//blogRegion : '#blog_cont'
		}

	});

	app.application = new app.Application();
	app.application.start();

})(app);
