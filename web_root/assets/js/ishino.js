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
	'': [ '最新ニュース（24H以内）', '※ジャンルで絞り込みたい場合はメニューからどうぞ', '' ],
	'#': [ '最新ニュース（24H以内）', '※ジャンルで絞り込みたい場合はメニューからどうぞ', '' ],
	'#NewsToday': [ '最新ニュース（24H以内）', '※ジャンルで絞り込みたい場合はメニューからどうぞ', '' ],
	'#NewsMusicOversea': [ 'Music > 洋楽全般', 'BARKS, RO69', 'rss' ],
	'#NewsMusicItem': [ 'Music > 機材・アイテム', 'RittorMusic, Supernice!', 'rss' ],
	'#NewsItIt': [ 'Tech > 一般', 'gihyo.jp, TechCrunch, THE BRIDGE, CNET Japan, InfoQ, NIKKEI TECH, ASCII.jp', 'rss' ],
	'#NewsItProgram': [ 'Tech > 詳細', 'CodeZine, クラウドWatch, Think IT', 'rss' ],
	'#NewsItPosting': [ 'Tech > はてぶ・Qiita', 'はてな, Qiita', 'rss' ],
	'#NewsItCompany': [ 'Tech > 企業ブログ', '', 'rss' ],
	'#NewsHealth': [ 'Healthcare', 'i-channel, HeatlTech, 日経デジタルヘルス, ITmedia', 'rss' ],
	'#NewsBusiness': [ 'Business', 'HBR', 'rss' ],
	'#NewsOther': [ 'Other', 'Gigazine, ネタりか', 'rss' ],
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

