import accounts from "/public/js/accounts.js";
document.accounts = accounts;
document.body.style.background = "rgb(40, 40, 40)";
document.body.innerHTML =
'<div class="eye-white"><div class="eye-ball"></div></div><div class="eye-white"><div class="eye-ball"></div></div>';
document.body.appendChild(
    Object.assign(document.createElement("style"), {
        textContent:
        "html{cursor:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAADz0lEQVR4nO2XXYhVVRSAj5aKpeEfFPSQD1bT9a51btyoTGgQ9Z61zoyJ1qUfEyO1ktAykBAswQh8UQRfTCGCegiKiKggijQps6heEgSpsGCauXftMz+SGA52Y52zz/HOzL333J9hnmbBeVj7nL32t/ZeP/s4ThtSyRRnl7PkC9IJAf5BgESARwVpUJD+NMCfGKTXJVvoasd+cxDd3TcapJ2CbAxyJe0RpGuCdLRSLN4wqSAjXasXC9J3yULAwwL0viC/EKDnCfTkxfVXBUBFg3zQIJ+/DkbHJw1kyF2/QIDPWYgRA/SyHlWjORXHmWGQ90Y7xP8Fy/2HOgapOM4MAf7CGg10B5qfu3+mAf4lcoI+7BjGAG2xOzJqwFvT6nxBf7M9rivmfrqlbZCKeob0e2gM+KRBb2MZeLsAPZc8Lj0dZL0VlXx+Vi0bfz1YnGuALtuAXtc2TBnpiWayJglopDd08fF2DPJn9qgOtQUiQK9qalYt+K8AXRSgswL0rUH6KXr4NwG+mnwH/On4VDbg7bPvT7UB4q/XDLBp+XEZ/IfrHYNKKdM9T5B2xFAB8uNjYJAftaD/CNKbar8v33tTUzAm8ljP+GgrThjkt2zWfTBmPEeZCUcL3DcIDA0N9uPam+NdKWUKy1qDoa12oR+rx7UmhdkY7bQ6esU6+3lDg0OutzSmv5TvXdIizLM2UH+d8A64FNp1qaAVO4Kmy42OP/ZiJDLq7WkWRGNAg9vuzLsTYehCGE9ARbn7kflJTOYok+Ihv1aVsh9pwJUy/m21vtVx7U8C/If9/mrJ9XP14lCP0uoDqpeRe5sodvxejaD72yCfFuQvBfl7bQ9jaw0NaebUcfC0hdmpuiCfiXRvV0MYFW2GdvKl8YvWygwtaAPZdbc6dUSDOtwJ4O2hbp0V5MP15kyEAT4ZduDl/j0C/FSA/IoWxPA90GNl5Lv0fZq9pOtnaVOoIx2xMO+0BONMgsQxZVzaEOl0II7JKYcxNmA1rSMYb4895q+mHEZsudDWEuqu93ytAjlVMKNRzPB9oY60w8bMmSmFqWSKs5PMs0XOAL9kq/DX6TDo7bKp/U2nMMOZwqIYZvBe/w4dCzOymf6kEgBvs9F+zulQqvvdMPQs1DEDfMwWyrdTDRiXNtiPpVMYvSrEfwn67xXaR/7ZOvtiqoGS6+fiH7ELy2hOJzCByyvjy9X1phrfDv0HUg30V91rUjtrGkx8ZUDqV12AVidXiJT/r0Q04nUbjdtzeycw5VzPnRqwZfCeDGGyhS4DtNuA90wndqdlWqbFqSP/Ay/TCMnyJ63uAAAAAElFTkSuQmCC'),auto}body{margin:0;padding:0;display:flex;height:100vh;align-items:center;justify-content:center}.eye-white{width:100px;height:100px;margin:30px;border-radius:50%;position:relative;display:inline-block;overflow:hidden;background:#fff}.eye-ball{width:45px;height:45px;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#000}",
    })
);
let loc = location.href.split("/").slice(3).join("/"),
eye = document.querySelectorAll(".eye-ball"),
delay, handmove;
accounts[loc]
? location.replace(accounts[loc.replace(".html")]): location.replace("https://www.semant.is-a.dev/" + loc);

document.addEventListener("mousemove", wiggle)
document.addEventListener("touchmove", wiggle)
 function wiggle () {
    if (delay) return;
    delay = true;
    setTimeout(() => {
        delay = false;
    }, 6.9);
    let a = (event.clientX / window.innerWidth) * 100,
    b = (event.clientY / window.innerHeight) * 100;
    eye[0].style.cssText =
    "left: " +
    a +
    "%; top: " +
    b +
    "%;" +
    "transform:translate(-" +
    a +
    "%,-" +
    b +
    "%)";
    eye[1].style.cssText =
    "left: " +
    a +
    "%; top: " +
    b +
    "%;" +
    "transform:translate(-" +
    a +
    "%,-" +
    b +
    "%)";
};
