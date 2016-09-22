$(document).ready(function () {
	$("a[href^=#]").click(function(event){
		$(".navbar-collapse").collapse('hide');
	});
	//$(".navbar-toggle").sidr({
		//source: '.nav-collapse'
	//});
});

var news_ary = {
	'#NewsMusic': [ 'News > Music', 'BARKS, RandoM' ],
	'#NewsItIt': [ 'News > Technology（全般/Business）', 'ITpro, gihyo.jp, TechCrunch, THE BRIDGE, CNET Japan' ],
	'#NewsItProgram': [ 'News > Technology（Program）', 'CodeZine' ],
	'#NewsItInfra': [ 'News > Technology（Infra）', 'ITpro Cloud, クラウドWatch, Think IT' ],
	'#NewsItYuru': [ 'News > Technology（ゆるネタ）', 'Gigazine, ネタりか, ASCII.jp' ],
	'#NewsCar': [ 'News > Car', 'Carview, オートックワン' ],
	'#NewsGame': [ 'News > Game', 'SocailGameInfo, GameBusiness.jp, 4Gamer.net' ]
};

function locationHashChanged() {
	var hash_val = location.hash
	if ( hash_val == '' || hash_val == '#' ) {
		hash_val = '#NewsMusic';
	}
	var val_flg = 0;
	Object.keys(news_ary).forEach( function(key) {
		if ( key == hash_val ) { val_flg = 1; }
	}, news_ary );

	var breadcrumb = '';
	var rss = '';
	var menu_link = '[&nbsp;&nbsp;<a href="#NewsMusic">Music</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Technology( <a href="#NewsItIt">IT</a> / <a href="#NewsItProgram">Program</a> / <a href="#NewsItInfra">Infra</a> / <a href="#NewsItYuru">ゆるネタ</a> )&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#NewsCar">Car</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#NewsGame">Game</a>&nbsp;&nbsp;]';
	if ( val_flg == 1 ) {
		breadcrumb = '<h6>' + news_ary[hash_val][0] + '</h6>';
		//breadcrumb = '<h6>&nbsp;&nbsp;&nbsp;' + menu_link + '</h6>';
		rss = '<h6><i class="fa fa-rss" aria-hidden="true"></i>&nbsp;&nbsp;' + news_ary[hash_val][1] + '</h6>';
	}

	$("#newsheader_01").html(breadcrumb);
	$("#newsheader_02").html(rss);
}

window.onload = locationHashChanged;
window.onhashchange = locationHashChanged;

