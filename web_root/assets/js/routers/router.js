var app = app || {};

//router
(function(app) {
	app.MainRouter = Backbone.Marionette.AppRouter.extend({
		//コントローラをインスタンス化
		controller: new app.MainController(),
		//ルーティング設定
		appRoutes : {
			''					: 'NewsMusicLists',
			'NewsMusic'			: 'NewsMusicLists',
			'NewsItIt'			: 'NewsItItLists',
			'NewsItProgram'		: 'NewsItProgramLists',
			'NewsItInfra'		: 'NewsItInfraLists',
			'NewsItYuru'		: 'NewsItYuruLists',
			'NewsItLink'		: 'NewsItLinkLists',
			'NewsCar'			: 'NewsCarLists',
			'NewsGame'			: 'NewsGameLists',
			'Prof'				: 'Prof',
			'Blog'				: 'Blog'
		},
	});
})(app);
