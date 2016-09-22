var app = app || {};

(function(app) {
	// News
	app.NewsItItItemView = Backbone.Marionette.ItemView.extend({
		tagName : 'li',

		template : '#rss-item-template',

	});

	app.NewsItItCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#NewsItIt-composite-template',

		childView : app.NewsItItItemView,

		childViewContainer : 'ul',

	});

	app.NewsItItLayoutView = Backbone.Marionette.LayoutView.extend({
		template: '#NewsItIt-layout-template',

		regions : {
			listRegion : '#NewsItIt-lists',
		},

		onRender : function(){
			var NewsItItCollection = new app.NewsItItCollection();
			this.listenTo(NewsItItCollection , 'reset', this.showList, this);
			NewsItItCollection.fetch({reset : true});
		},

		showList : function(NewsItItCollection){
			this.listRegion.show( new app.NewsItItCompositeView({
				collection : NewsItItCollection
			}));
		},

	});

	// Goods
	app.NewsItItGoodsView = Backbone.Marionette.ItemView.extend({
		template: '#NewsItIt-goods-template',
	});
})(app);
