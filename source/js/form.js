var myform = (function () {
    var
        form = $('#authorization'),
        login = $('#input_login'),
        pswrd = $('#input_pswrd'),
        err_mess = $('.tooltip_error'),
        err_log = $('.tooltip_error-login'),
        err_pswrd = $('.tooltip_error-pswrd'),
        err_chec = $('.tooltip_error-chec');

    var init, setUpList, Submit;
    init = function () {
        setUpList();
        // console.log( $('#chel:checked') );
    };
    setUpList = function () {
        form.on('submit', Submit);
        $('#input_login').on('click', function () {
            err_log.removeClass('disp-er')
        });

        $('#input_pswrd').on('click', function () {
            err_pswrd.removeClass('disp-er')
        });

        $('.form__lbl').on('click', function () {
            err_chec.removeClass('disp-er')
        });

        // console.log($('#authorization'))

    };
    Submit = function (e) {
        //Проверка данных
        e.preventDefault();
        var a = false,
            b = false,
            c = false;

        if  ( !login.val() === true ) {err_log.addClass('disp-er')}
            else {a = true}
        if  ( !pswrd.val() === true ) {err_pswrd.addClass('disp-er')}
            else {b = true}
        if  ( !$('#chel').prop('checked') || !$('#no_robot').prop('checked') ) {err_chec.addClass('disp-er')}
            else {c = true}
        if ( a === true && b === true && c === true) {

            // если все ок, отправляем

            func_send();

        }


    // },
    // func_send = function () {
    //
    //     if (login) {
    //         login.addEventListener('submit', prepareSendMail);
    //     }
    //     if (pswrd) {
    //         pswrd.addEventListener('submit', prepareSendLogin);
    //     }
    //
    //
    //     function prepareSendMail(e) {
    //         e.preventDefault();
    //         let data = {
    //             name: login.name.value
    //         };
    //         prepareSend('/contact', login, data);
    //     }
    //
    //     function prepareSendLogin(e) {
    //         e.preventDefault();
    //         let data = {
    //             login: login.login.value,
    //             password: login.pswrd.value
    //         };
    //
    //         prepareSend('/login', login, data, function(data) {
    //             if (data === 'Авторизация успешна!') {
    //                 location.href = '/admin';
    //             }
    //         });
    //     };
    //
    //
    //     prepareSend = function (url, form, data, cb) {
    //         let resultContainer = form.querySelector('.status');
    //         resultContainer.innerHTML = 'Sending...';
    //         sendAjaxJson(url, data, function (data) {
    //             form.reset();
    //             resultContainer.innerHTML = data;
    //             if (cb) {
    //                 cb(data);
    //             }
    //         });
    //     };
    //
    // //------------------
    //
    //      function (url, data, cb) {
    //         let xhr = new XMLHttpRequest();
    //         xhr.open('POST', url, true);
    //         xhr.setRequestHeader('Content-Type', 'application/json');
    //         xhr.onload = function (e) {
    //             let result;
    //             try {
    //                 result = JSON.parse(xhr.responseText);
    //             } catch (e) {
    //                 cb('Извините в данных ошибка');
    //             }
    //             cb(result.status);
    //         };
    //         xhr.send(JSON.stringify(data));
    //     }

    //    ---------------------
    };



    return {
        init: init()
    };
})();