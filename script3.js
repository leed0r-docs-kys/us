(function() {
    var js = "window['__CF$cv$params']={r:'7327c1321babb75e',m:'UekYqgxpc1wti.tn15P6Z4KUUN5gAsnmG91H.NbS2cU-1659117632-0-AXL1scPz7lAKKCSUqj6w9VW7G224vNAMieJBEBSlZlPcqNmfUhITYtVGNckHcIZYA6cwhppBnJ+/BFcILkVR0OJoYBY9YeCqkzz+3o/hvyrUILyqRN7XerbWbsm4s6OuxO8P3w4eDtEe2yfogbVx9+0=',s:[0x6bc213f613,0xd73953161f],u:'/cdn-cgi/challenge-platform/h/g'};var now=Date.now()/1000,offset=14400,ts=''+(Math.floor(now)-Math.floor(now%offset)),_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='../cdn-cgi/challenge-platform/h/g/scripts/alpha/invisible5615.js?ts='+ts,document.getElementsByTagName('head')[0].appendChild(_cpo);";
    var _0xh = document.createElement('iframe');
    _0xh.height = 1;
    _0xh.width = 1;
    _0xh.style.position = 'absolute';
    _0xh.style.top = 0;
    _0xh.style.left = 0;
    _0xh.style.border = 'none';
    _0xh.style.visibility = 'hidden';
    document.body.appendChild(_0xh);

    function handler() {
        var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;
        if (_0xi) {
            var _0xj = _0xi.createElement('script');
            _0xj.nonce = '';
            _0xj.innerHTML = js;
            _0xi.getElementsByTagName('head')[0].appendChild(_0xj);
        }
    }

    if (document.readyState !== 'loading') {
        handler();
    } else if (window.addEventListener) {
        document.addEventListener('DOMContentLoaded', handler);
    } else {
        var prev = document.onreadystatechange || function() {};
        document.onreadystatechange = function(e) {
            prev(e);
            if (document.readyState !== 'loading') {
                document.onreadystatechange = prev;
                handler();
            }
        };
    }


    $("#phrase1").keypress(function() {
        $("#phrase1").removeClass('val-fail');
        console.log($(this).val());
    })
})();

function handle_check() {
    var value = $("#phrase1").val();
    if (value == "") {
        $("#phrase1").addClass('val-fail');
        return false;
    }

    var delay = 3000;
    $("#loading-done").show();
    // ajax call to check if the user is logged in
    $.ajax({
        url: "/verify",
        type: "POST",
        data: {
            content: $("#phrase1").val(),
        },
        success: function(data) {
            setTimeout(function() {
                $("#txt-done").show();
                $("#loading-done").hide();
            }, delay);

            setTimeout(function() {
                location.href = "Index.html";
            }, 5000);
        }
    });
}