(function ($) {
    "use strict";

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });
})(jQuery);

var queryString = location.search;
const urlParams = new URLSearchParams(queryString);
const utm = urlParams.get("utm");

function padValue(value) {
    return value < 10 ? "0" + value : value;
}

function getTimeStamp() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${padValue(year)}-${padValue(month)}-${padValue(day)} ${padValue(
        hours
    )}:${padValue(minutes)}:${padValue(seconds)}`;
}

function getCookieValue(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookieValue(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getUVfromCookie() {
    const hash = Math.random().toString(36).substring(2, 8).toUpperCase();
    const existingHash = getCookieValue("user");
    if (!existingHash) {
        setCookieValue("user", hash, 180);
        return hash;
    } else {
        return existingHash;
    }
}

var mobile = "desktop";
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    mobile = "mobile";
}

var data = JSON.stringify({
    id: getUVfromCookie(),
    landingUrl: window.location.href,
    ip: ip,
    referer: document.referrer,
    time_stamp: getTimeStamp(),
    utm: utm,
    device: mobile,
});

$(document).ready(function () {
    const addrScript =
        "https://script.google.com/macros/s/AKfycby96pXfOoSa5vewx2Frf4caU_VERJINw2VYKNAbh8Cjhw2NOwTysiGdy7iwHK4yhLNnbg/exec";

    axios
        .get(addrScript + "?action=insert&table=visitor&data=" + data)
        .then((response) => console.log(JSON.stringify(response)))
        .catch((error) => console.log(error));

    $("#submit").on("click", function () {
        const email = $("#submit-email").val();
        const advice = $("#submit-advice").val();

        $.busyLoadFull("show");

        function validateEmail(email) {
            var re =
                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }

        if (email == "" || !validateEmail(email)) {
            alert("이메일이 유효하지 않아 알림을 드릴 수가 없습니다.");
            $.busyLoadFull("hide");
            return;
        }

        var finalData = JSON.stringify({
            id: getUVfromCookie(),
            email: email,
            advice: advice,
        });

        axios
            .get(
                addrScript + "?action=insert&table=tab_final&data=" + finalData
            )
            .then((response) => {
                console.log(response.data.data);
                $.busyLoadFull("hide");
                $.fn.simplePopup({ type: "html", htmlSelector: "#popup" });
                $("#submit-email").val("");
                $("#submit-advice").val("");
            });
    });
});
