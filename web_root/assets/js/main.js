$(document).ready(function () {
	$("a[href^=#]").click(function(event){
		$(".navbar-collapse").collapse('hide');
	});

	//goto top button
    var topBtn = $('#page-top');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
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
	var val_flg = 0;
	var breadcrumb = '';
	var rss = '';

	if ( hash_val == '#' || hash_val == '' ) { hash_val = '#NewsMusic'; }
	Object.keys(news_ary).forEach( function(key) {
		if ( key == hash_val ) { val_flg = 1; }
	}, news_ary );

	if ( val_flg == 1 ) {
		breadcrumb = '<h6>' + news_ary[hash_val][0] + '</h6>';
		rss = '<h6><i class="fa fa-rss" aria-hidden="true"></i>&nbsp;&nbsp;' + news_ary[hash_val][1] + '</h6>';
	}
	$("#newsheader_01").html(breadcrumb);
	$("#newsheader_02").html(rss);
}

window.onload = locationHashChanged;
window.onhashchange = locationHashChanged;

