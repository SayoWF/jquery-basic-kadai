
$(window).on({
    //HTMLドキュメントが読み込み完了したら
    'load': function(){
    //「loadイベントが発生しました」とコンソールに出力
        console.log('loadイベントが発生しました');
    },
    //画面をスクロールしたとき
    'scroll': function(){
        //「scrollイベントが発生しました」とコンソールに出力
        console.log('scrollイベントが発生しました');
    }
});

