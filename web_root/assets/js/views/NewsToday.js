var app = app || {};

(function(app) {
	// News
	app.NewsTodayItemView = Backbone.Marionette.ItemView.extend({
		//tagName : 'li',

		template : '#rss-item-template',

	});

	app.NewsTodayCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#NewsToday-composite-template',

		childView : app.NewsTodayItemView,

		childViewContainer : 'span',

	});

	app.NewsTodayLayoutView = Backbone.Marionette.LayoutView.extend({
		template: '#NewsToday-layout-template',

		regions : {
			listRegion : '#NewsToday-lists',
		},

		onRender : function(){
			var NewsTodayCollection = new app.NewsTodayCollection();
			this.listenTo(NewsTodayCollection , 'reset', this.showList, this);
			NewsTodayCollection.fetch({reset : true});
		},

		showList : function(NewsTodayCollection){
			this.listRegion.show( new app.NewsTodayCompositeView({
				collection : NewsTodayCollection
			}));
		},

	});

})(app);
