var app = app || {};

//router
(function(app) {
	app.MainRouter = Backbone.Marionette.AppRouter.extend({
		//コントローラをインスタンス化
		controller: new app.MainController(),
		//ルーティング設定
		appRoutes : {
			//''					: 'Top',
			''					: 'NewsMusicOverseaLists',
			'NewsMusicOversea'	: 'NewsMusicOverseaLists',
			'NewsMusicItem'		: 'NewsMusicItemLists',
			'NewsItIt'			: 'NewsItItLists',
			'NewsItProgram'		: 'NewsItProgramLists',
			'NewsItInfra'		: 'NewsItInfraLists',
			'NewsItPosting'		: 'NewsItPostingLists',
			'NewsItCompany'		: 'NewsItCompanyLists',
			'NewsItYuru'		: 'NewsItYuruLists',
			'NewsItLink'		: 'NewsItLinkLists',
			'NewsHealth'		: 'NewsHealthLists',
			'NewsCar'			: 'NewsCarLists',
			'NewsGame'			: 'NewsGameLists',
			'Blog'				: 'BlogLists'
		},
	});
})(app);
