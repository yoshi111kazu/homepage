var app = app || {};

(function(app) {
	// News
	app.BlogItemView = Backbone.Marionette.ItemView.extend({
		//tagName : 'li',

		template : '#rss-item-template',

	});

	app.BlogCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#Blog-composite-template',

		childView : app.BlogItemView,

		childViewContainer : 'span',

	});

	app.BlogLayoutView = Backbone.Marionette.LayoutView.extend({
		template: '#Blog-layout-template',

		regions : {
			listRegion : '#Blog-lists',
		},

		onRender : function(){
			var BlogCollection = new app.BlogCollection();
			this.listenTo(BlogCollection , 'reset', this.showList, this);
			BlogCollection.fetch({reset : true});
		},

		showList : function(BlogCollection){
			this.listRegion.show( new app.BlogCompositeView({
				collection : BlogCollection
			}));
		},

	});

})(app);
