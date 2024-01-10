$(function () {
    //id属性がchange-colorの要素がクリックされたら
    $('#change-color').on('click', function () {
        //文字の色を赤色に変える
        $('#target').css("color", "red");
    });

    //id属性がchange-textの要素がクリックされたら
    $('#change-text').on('click', function () {
        //文字の内容をHello!に変える
        $('#target').text('Hello!');
    });

    //id属性がfade-outの要素がクリックされたら
    $('#fade-out').on('click', function () {
        //文字をフェードアウトさせる
        $('#target').fadeOut();
    });

    //id属性がfade-inの要素がクリックされたら
    $('#fade-in').on('click', function () {
        //文字をフェードインさせる
        $('#target').fadeIn();
    });
})