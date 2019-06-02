var app = app || {};

(function(app) {
	// News
	app.NewsOtherItemView = Backbone.Marionette.ItemView.extend({
		//tagName : 'li',

		template : '#rss-item-template',

	});

	app.NewsOtherCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#NewsOther-composite-template',

		childView : app.NewsOtherItemView,

		childViewContainer : 'span',

	});

	app.NewsOtherLayoutView = Backbone.Marionette.LayoutView.extend({
		template: '#NewsOther-layout-template',

		regions : {
			listRegion : '#NewsOther-lists',
		},

		onRender : function(){
			var NewsOtherCollection = new app.NewsOtherCollection();
			this.listenTo(NewsOtherCollection , 'reset', this.showList, this);
			NewsOtherCollection.fetch({reset : true});
		},

		showList : function(NewsOtherCollection){
			this.listRegion.show( new app.NewsOtherCompositeView({
				collection : NewsOtherCollection
			}));
		},

	});

})(app);
