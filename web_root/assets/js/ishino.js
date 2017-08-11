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
	'': [ '最新ニュース（24H以内）', '※ジャンルで絞り込みたい場合はメニューから', '' ],
	'#': [ '最新ニュース（24H以内）', '※ジャンルで絞り込みたい場合はメニューから', '' ],
	'#NewsToday': [ '最新ニュース（24H以内）', '※ジャンルで絞り込みたい場合はメニューから', '' ],
	'#NewsMusicOversea': [ '洋楽全般', 'BARKS, RO69', 'rss' ],
	'#NewsMusicItem': [ '機材・アイテム', 'RandoM, Supernice!', 'rss' ],
	'#NewsItIt': [ '一般・ビジネス', 'ITpro, gihyo.jp, TechCrunch, THE BRIDGE, CNET Japan', 'rss' ],
	'#NewsItProgram': [ 'プログラム', 'CodeZine', 'rss' ],
	'#NewsItInfra': [ 'インフラ', 'ITpro Cloud, クラウドWatch, Think IT', 'rss' ],
	'#NewsItPosting': [ 'はてぶ・Qiita', 'はてな, Qiita', 'rss' ],
	'#NewsItCompany': [ '企業ブログ', 'cookpad, はてな, mercari, TORETA, LINE', 'rss' ],
	'#NewsHealth': [ 'ヘルスケア', 'HeatlTech, マイナビ, 日経, ITmedia', 'rss' ],
	'#NewsItYuru': [ 'ゆるネタ', 'Gigazine, ASCII', 'rss' ],
	'#Profile': [ '', '', '' ],
	'#Blog': [ '', '', '' ]
};

function locationHashChanged() {
	var hash_val = location.hash
	var val_flg = 0;
	var str_01 = '';
	var str_02 = '';

	//if ( hash_val == '#' || hash_val == '' ) { hash_val = '#NewsToday'; }

	Object.keys(news_ary).forEach( function(key) {
		if ( key == hash_val ) {
			str_01 = news_ary[hash_val][0];
			if ( news_ary[hash_val][2] == 'rss' ) {
				str_02 = '<i class="icon-rss"></i>&nbsp;' + news_ary[hash_val][1];
			} else {
				str_02 = news_ary[hash_val][1];
			}

			$("#newsheader_01").html('<h1>' + str_01 + '</h1>');
			$("#newsheader_02").html('<h2>' + str_02 + '</h2>');
		}
	}, news_ary );

	// Goto Top
	$('html, body').animate({
		scrollTop: $('html').offset().top
	}, 500, 'easeInOutExpo');

}

