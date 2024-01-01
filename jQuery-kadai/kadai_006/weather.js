$(window).on({
    //HTMLドキュメントが読み込み完了したら
    'load': function(){
        //「今日の天気予報」の文字色を赤にする
        $('#target').addClass('heading');
    }
});