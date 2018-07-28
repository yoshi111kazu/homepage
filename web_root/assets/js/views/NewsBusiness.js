var app = app || {};

(function(app) {
	// News
	app.NewsBusinessItemView = Backbone.Marionette.ItemView.extend({
		//tagName : 'li',

		template : '#rss-item-template',

	});

	app.NewsBusinessCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#NewsBusiness-composite-template',

		childView : app.NewsBusinessItemView,

		childViewContainer : 'span',

	});

	app.NewsBusinessLayoutView = Backbone.Marionette.LayoutView.extend({
		template: '#NewsBusiness-layout-template',

		regions : {
			listRegion : '#NewsBusiness-lists',
		},

		onRender : function(){
			var NewsBusinessCollection = new app.NewsBusinessCollection();
			this.listenTo(NewsBusinessCollection , 'reset', this.showList, this);
			NewsBusinessCollection.fetch({reset : true});
		},

		showList : function(NewsBusinessCollection){
			this.listRegion.show( new app.NewsBusinessCompositeView({
				collection : NewsBusinessCollection
			}));
		},

	});

})(app);
