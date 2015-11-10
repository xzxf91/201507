var oDiv3 = document.getElementById("div3");
oDiv3.onclick = function () {
    var count = 1;
    var timer = window.setInterval(function () {
        count -= 0.01;
        oDiv3.style.opacity = count;
        if (count <= 0) {
            window.clearInterval(timer);
        }
    }, 10);
};