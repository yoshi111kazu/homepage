var app = app || {};

(function(app) {
	app.MainController = Backbone.Marionette.Controller.extend({

		Top : function() { this.nextView(app.TopView); },
		NewsMusicLists : function() { this.nextView(app.NewsMusicLayoutView); },
		NewsItItLists : function() { this.nextView(app.NewsItItLayoutView); },
		NewsItProgramLists : function() { this.nextView(app.NewsItProgramLayoutView); },
		NewsItInfraLists : function() { this.nextView(app.NewsItInfraLayoutView); },
		NewsItYuruLists : function() { this.nextView(app.NewsItYuruLayoutView); },
		NewsItLinkLists : function() { this.nextView(app.NewsItLinkView); },
		NewsHealthLists : function() { this.nextView(app.NewsHealthLayoutView); },
		NewsCarLists : function() { this.nextView(app.NewsCarLayoutView); },
		NewsGameLists : function() { this.nextView(app.NewsGameLayoutView); },
		Prof : function() { this.nextView(app.ProfView); },
		Blog : function() { this.nextView(app.BlogView); },

		nextView : function(View, option) {
			app.application.mainRegion.show(new View(option));
		},

	});
})(app);
