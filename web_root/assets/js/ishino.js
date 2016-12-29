// Ready
$(document).ready(function () {

	// GoTo Top Button
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

// Load
window.onload = locationHashChanged;

// HachChange
window.onhashchange = locationHashChanged;

var news_ary = {
	'#NewsMusic': [ 'News > Music', 'BARKS, RandoM' ],
	'#NewsItIt': [ 'News > Technology（全般/Business）', 'ITpro, gihyo.jp, TechCrunch, THE BRIDGE, CNET Japan' ],
	'#NewsItProgram': [ 'News > Technology（Program）', 'CodeZine' ],
	'#NewsItInfra': [ 'News > Technology（Infra）', 'ITpro Cloud, クラウドWatch, Think IT' ],
	'#NewsHealth': [ 'News > HealthCare', 'HeatlTech, マイナビ, 日経, ITmedia' ],
	'#NewsItYuru': [ 'News > ゆるネタ', 'Gigazine, ネタりか, ASCII.jp' ],
	'#NewsCar': [ 'News > Car', 'Carview, オートックワン' ],
	'#NewsGame': [ 'News > Game', 'SocailGameInfo, GameBusiness.jp, 4Gamer.net' ],
	'#Blog': [ 'Blog', '' ]
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
		breadcrumb = news_ary[hash_val][0];
		if ( news_ary[hash_val][1] != '' ) {
			rss = '<i class="fa fa-rss" aria-hidden="true"></i>&nbsp;&nbsp;' + news_ary[hash_val][1];
		}
	}

	$("#newsheader_01").html(breadcrumb);
	$("#newsheader_02").html(rss);
}

