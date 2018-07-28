<?php
/*****************************************************************************
 *  name        : RSS.inc
 *  function    : RSSクラス
 *
 ****************************************************************************/

//////////////////////////////////////////////////////////////////////////////
// RSSクラス
//////////////////////////////////////////////////////////////////////////////
class ClsRSS {

	/******************/
	/* コンストラクタ */
	/******************/
	function ClsRSS() {
		require_once( 'XML/RSS.php' );
	}

	/***********/
	/* RSS取得 */
	/***********/
	function getFullRSS( $genre = 'all', $limit = '20' ) {

		global $rss_site;
		$rss_site = array();	
		if ( $genre == 'music_oversea' ) {
			$rss_site[] = array( 'site' => 'BARKS', 'URL' => 'https://feeds.barks.jp/rss/barks_news_oversea.rdf' );
			$rss_site[] = array( 'site' => 'RO69', 'URL' => 'https://ro69.jp/news/index.rss?category=2' );
		} elseif ( $genre == 'music_item' ) {
			$rss_site[] = array( 'site' => 'RittorMusic', 'URL' => 'http://rittor-music.jp/feed' );
			$rss_site[] = array( 'site' => 'Supernice!', 'URL' => 'https://effector-hakase.com/feed' );
			$rss_site[] = array( 'site' => 'Supernice!', 'URL' => 'https://guitar-amp.biz/feed' );
		} elseif ( $genre == 'it_it' ) {
			$rss_site[] = array( 'site' => 'gihyo.jp', 'URL' => 'https://gihyo.jp/feed/rss1' );
			$rss_site[] = array( 'site' => 'TechCrunch', 'URL' => 'https://jp.techcrunch.com/feed/', 'no_desc' => true );
			$rss_site[] = array( 'site' => 'THE BRIDGE', 'URL' => 'https://feeds.feedburner.com/SdJapan?format=xml' );
			$rss_site[] = array( 'site' => 'CNET Japan', 'URL' => 'http://feeds.japan.cnet.com/rss/cnet/all.rdf' );
			$rss_site[] = array( 'site' => 'InfoQ', 'URL' => 'https://www.infoq.com/jp/feed' );
			$rss_site[] = array( 'site' => 'NIKKEI TECH', 'URL' => 'https://tech.nikkeibp.co.jp/rss/xtech-it.rdf' );
			$rss_site[] = array( 'site' => 'ASCII.jp Tech', 'URL' => 'http://ascii.jp/tech/rss.xml' );
			$rss_site[] = array( 'site' => 'ASCII.jp Biz', 'URL' => 'http://ascii.jp/biz/rss.xml' );
		} elseif ( $genre == 'it_program' ) {
			$rss_site[] = array( 'site' => 'CodeZine', 'URL' => 'https://codezine.jp/rss/new/20/index.xml' );
			$rss_site[] = array( 'site' => 'クラウドWatch', 'URL' => 'https://cloud.watch.impress.co.jp/cda/rss/cloud.rdf' );
			$rss_site[] = array( 'site' => 'Think IT', 'URL' => 'https://thinkit.co.jp/rss.xml' );
		} elseif ( $genre == 'it_posting' ) {
			//$rss_site[] = array( 'site' => 'はてな', 'URL' => 'https://b.hatena.ne.jp/hotentry/it.rss' );
			$rss_site[] = array( 'site' => 'Qiita', 'URL' => 'https://qiita.com/popular-items/feed' );
		} elseif ( $genre == 'it_company' ) {
			$rss_site[] = array( 'site' => 'cookpad', 'URL' => 'https://techlife.cookpad.com/rss', 'no_desc' => true );
			//$rss_site[] = array( 'site' => 'はてな', 'URL' => 'https://developer.hatenastaff.com/rss', 'no_desc' => true );
			$rss_site[] = array( 'site' => 'mercari', 'URL' => 'https://tech.mercari.com/rss', 'no_desc' => true );
			$rss_site[] = array( 'site' => 'TORETA', 'URL' => 'https://tech.toreta.in/rss', 'no_desc' => true );
			$rss_site[] = array( 'site' => 'LINE', 'URL' => 'https://engineering.linecorp.com/ja/blog/rss2', 'no_desc' => true );
			$rss_site[] = array( 'site' => 'HEARTBEATS', 'URL' => 'https://heartbeats.jp/hbblog/atom.xml' );
		} elseif ( $genre == 'health' ) {
			$rss_site[] = array( 'site' => 'i-channel', 'URL' => 'https://www.icare.jpn.com/ichannel/feed/' );
			$rss_site[] = array( 'site' => 'HealthTech', 'URL' => 'https://healthtechnews.jp/feed/' );
			//$rss_site[] = array( 'site' => 'マイナビ', 'URL' => 'https://feeds.journal.mycom.co.jp/rss/mycom/healthcare/mental' );
			//$rss_site[] = array( 'site' => '日経', 'URL' => 'https://techon.nikkeibp.co.jp/ndh/index.rdf' );
			$rss_site[] = array( 'site' => '日経', 'URL' => 'https://tech.nikkeibp.co.jp/rss/xtech-hlth.rdf' );
			$rss_site[] = array( 'site' => 'ITmedia', 'URL' => 'https://headlines.yahoo.co.jp/rss/it_health-c_life.xml' );
		} elseif ( $genre == 'business' ) {
			$rss_site[] = array( 'site' => 'Harvard Business Review', 'URL' => 'https://www.dhbr.net/list/feed/rss' );
			$rss_site[] = array( 'site' => 'Diamond Online', 'URL' => 'https://diamond.jp/list/rsssc?w=%E3%82%AD%E3%83%A3%E3%83%AA%E3%82%A2%E3%83%BB%E3%82%B9%E3%82%AD%E3%83%AB' );
			$rss_site[] = array( 'site' => 'Bizコンパス', 'URL' => 'https://www.bizcompass.jp/feed/?link_id=head_rss' );
		} elseif ( $genre == 'other' ) {
			$rss_site[] = array( 'site' => 'Gigazine', 'URL' => 'https://gigazine.net/news/rss_2.0/' );
			$rss_site[] = array( 'site' => 'ネタりか', 'URL' => 'https://netallica.yahoo.co.jp/rss/top' );
		} elseif ( $genre == 'blog' || $genre == 'blog_new' ) {
			$rss_site[] = array( 'site' => 'yoshi111kazu', 'URL' => 'https://blog.ishino.info/?feed=rss2' );
		} else {
		}

		$rss_data = array();	
		$result = array();

		foreach ( $rss_site as $key => $val ) {
			$rss =& new XML_RSS( $val['URL'] );
			$rss->parse();
			$rss_data = doAuto2Utf8( $rss->getItems() );
			//print_r( $rss_data );
			//debug_print( $rss_data, $val['site'] );
			if ( count( $rss_data ) > 0 ) {
				$rss_cnt = 0;
				foreach ( $rss_data as $key2 => $val2 ) {
					//print_r( $val2 );
					if ( $rss_cnt >= $limit ) {
						break;
					}
					// Atom
					if ( isset( $val2['published'] ) ) {
						$rss_date_tmp = preg_replace( '/T|[\+Z].+/', ' ', $val2['published'] );
						$rss_date = preg_replace( '/-/', '/', $rss_date_tmp );
					// Rss1.0
					} else if ( isset( $val2['dc:date'] ) ) {
						$rss_date_tmp = preg_replace( '/T|[\+Z].+/', ' ', $val2['dc:date'] );
						$rss_date = preg_replace( '/-/', '/', $rss_date_tmp );
					// Rss2.0
					} else if ( isset( $val2['pubdate'] ) ) {
						if ( $val['site'] == 'Think IT' ) {
							$rss_date = preg_replace( '/\(.*\)/', '/', $val2['pubdate'] );
							$rss_date = preg_replace( '/-/', '/', $rss_date );
							$rss_date = preg_replace( '/年/', '/', $rss_date );
							$rss_date = preg_replace( '/月/', '/', $rss_date );
							$rss_date = preg_replace( '/日/', '', $rss_date );
						} else {
							$rss_date = date( 'Y/m/d H:i:s', strtotime( $val2['pubdate'] ) );
						}
					} else {
						$rss_date = '-';
					}
					$rss_date = trim( $rss_date );

					// 広告系以外を取得(AD: PR:)
					if ( isset( $val2['title'] ) ) {
						if ( !preg_match( '/^AD:/', $val2['title'] ) && !preg_match( '/^PR:/', $val2['title'] ) ) {

							//descriptionの<p>タグなどの削除
							/*
							$desc_tmp = '';
							$desc_tmp = preg_replace( '/(?:\n|\r|\r\n)/s', '', $val2['description'] );
							$desc_tmp = preg_replace( '/\<p\>/', '', $desc_tmp );
							$desc_tmp = preg_replace( '/\<\/p\>/', '', $desc_tmp );
							$desc_tmp = preg_replace( '/\<img.*\/\>/', '', $desc_tmp );
							$desc_tmp = preg_replace( '/\<a.*href.*\<\/a\>/', '', $desc_tmp );
							$desc_tmp = preg_replace( '/^　/', '', $desc_tmp );
							$desc_tmp = preg_replace( '/^ /', '', $desc_tmp );
							$desc_tmp = preg_replace( '/\<b\>\<a .*\<\/a\>\<\/b\>/', '', $desc_tmp );
							*/

							//個別処理
							if ( $val['no_desc'] == true ) {
								$val2['description'] = '';
							}
							if ( $val['site'] == 'RO69' ) {
								$val2['title'] = preg_replace( '/ニュース - /', '', $val2['title'] );
							}
							if ( $val['site'] == 'yoshi111kazu' ) {
								$val2['description'] = $val2['content:encoded'];
							}
							if ( $val['site'] == 'i-channel' ) {
								$val2['description'] = '';
							}

							$result[] = array( 'title' => $val2['title'],
													'link' => $val2['link'],
													'link_from' => $val['site'],
													'data' =>  $val2['description'],
													'update' => '['.$rss_date.']'
													);

							$rss_cnt++;
						}
					}
				}
			}
		}

		/*
		if ( $genre == 'music' ) {
			$udo_data = $this->GetLiveData_UDO();
			foreach ( $udo_data as $key1 => $val1 ) {
				$result[] = $val1;
			}
		}
		*/

		// ソート
		doArrayUrsort( $result, 'update' );
		//debug_print( $result, "result" );

		return $result;
	}

	/*******************/
	/* Live情報 by UDO */
	/*******************/
	function GetLiveData_UDO() {
		$result = array();

		$url = 'https://www.udo.co.jp/';
		$html = file( $url );

		foreach ( $html as $key1 => $val1 ) {
			if ( preg_match( '/\<div class="news_list"\>/', $val1 ) ) {
				$desc_tmp = preg_replace( '/(?:\n|\r|\r\n)/s', '', $val1 );

				$ary_date = mb_substr( $desc_tmp, mb_strpos( $desc_tmp, 'news_list_date' ) + 16, 10 );
				$ary_date = preg_replace( '/\./', '/', $ary_date );
				$ary_date = '[' . $ary_date . ' 00:00:00]';
				$desc_tmp = mb_strcut( $desc_tmp, mb_strpos( $desc_tmp, 'news_list_date' ) + 33, null );

				$desc_tmp = preg_replace( '/\<div class="news_list"\>/', '', $desc_tmp );
				$desc_tmp = preg_replace( '/\<\/div\>/', '', $desc_tmp );
				$desc_tmp = preg_replace( '/\<span class="news_list_date"\>/', '', $desc_tmp );
				$desc_tmp = preg_replace( '/\<span class="ArtistName"\>/', '', $desc_tmp );
				$desc_tmp = preg_replace( '/\<\/span\>/', '', $desc_tmp );
				$desc_tmp = preg_replace( '/\&gt\;/', '', $desc_tmp );
				$desc_tmp = preg_replace( '/\<a href="/', '<a target="_blank" href="'.$url, $desc_tmp );
				$desc_tmp = trim( $desc_tmp );
				$result[] = array( 'title' => $desc_tmp,
										'link' => '',
										'link_from' => 'UDO',
										'data' =>  $desc_tmp,
										'image_name' => '',
										'image_link' =>  '',
										'update' => $ary_date
										);
			}
		}
		//debug_print( $result, "result" );

		return $result;
	}
}
?>
