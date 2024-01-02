$(function () {
    //class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function () {
        //class属性がtext-boxの要素に「クリックされました！」と表示する
        $('.text-box').val('クリックされました！');
    });
});