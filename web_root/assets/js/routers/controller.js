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
})(app);
