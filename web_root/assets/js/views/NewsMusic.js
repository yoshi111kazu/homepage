var app = app || {};

(function(app) {
	// News
	app.NewsMusicItemView = Backbone.Marionette.ItemView.extend({
		tagName : 'li',

		template : '#rss-item-template',

	});

	app.NewsMusicCompositeView = Backbone.Marionette.CompositeView.extend({
		template: '#NewsMusic-composite-template',

		childView : app.NewsMusicItemView,

		childViewContainer : 'ul',

	});

	app.NewsMusicLayoutView = Backbone.Marionette.LayoutView.extend({
		template: '#NewsMusic-layout-template',

		regions : {
			listRegion : '#NewsMusic-lists',
		},

		onRender : function(){
			var musicCollection = new app.NewsMusicCollection();
			this.listenTo(musicCollection , 'reset', this.showList, this);
			musicCollection.fetch({reset : true});
		},

		showList : function(musicCollection){
			this.listRegion.show( new app.NewsMusicCompositeView({
				collection : musicCollection
			}));
		},

	});

})(app);
