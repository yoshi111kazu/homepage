<?
/*****************************************************************************
 *  name        : put_rss_check.php
 *  function    : 
 *
 ****************************************************************************/
/****************/
/* インクルード */
/****************/
	require_once( '../../src/inc/define.inc' );
	require_once( INC_PHP_PATH."RSS.inc" );

/********/
/* main */
/********/
	$filepath = WEB_ROOT . 'api/data/';
	$ClsRSS = new ClsRSS();

	//$genre = array( 'music', 'it_it', 'it_program', 'it_infra', 'it_yuru', 'game', 'car' );
	$genre = array( 'it_program' );
	foreach( $genre as $key => $val ) {
		$assign_data = array();
		$assign_data['merge_data'] = $ClsRSS->getFullRSS( $val, '20' );
		$assign_data['rss_site'] = $rss_site;

	
		echo "<pre>";
		//print_r ( $assign_data['merge_data'] );
		print_r ( $rss_site );
		foreach( $assign_data['merge_data'] as $key => $val ) {
			print( "[".$key."][".$val['update']."]".$val['link_from']." : ".$val['title']."<br>" );
		}
		echo "</pre>";
	}

/**********/
/* 全終了 */
/**********/
	exit();
?>
