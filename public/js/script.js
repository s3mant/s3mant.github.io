import accounts from "/public/js/accounts.js";
document.accounts = accounts;
document.body.style.background = "rgb(40, 40, 40)";
document.body.innerHTML = '<div class="ring">Loading<span></span></div>';
document.body.appendChild(
  Object.assign(document.createElement("style"), {
    textContent:
      "html{cursor:none;-webkit-user-select: none;-ms-user-select: none;-o-user-select: none;user-select: none;}.ring,span{left:50%;background:0 0}.ring:before,span:before{content:'';position:absolute}.ring,.ring:before,span,span:before{position:absolute}body{margin:0;padding:0;background:#262626}.ring{top:50%;transform:translate(-50%,-50%);width:150px;height:150px;border:3px solid #3c3c3c;border-radius:50%;text-align:center;line-height:150px;font-family:sans-serif;font-size:20px;color:#E91E63;letter-spacing:4px;text-transform:uppercase;text-shadow:0 0 10px #E91E63;box-shadow:0 0 20px rgba(0,0,0,.5)}.ring:before{top:-3px;left:-3px;width:100%;height:100%;border:3px solid transparent;border-top:3px solid #E91E63;border-right:3px solid #E91E63;border-radius:50%;animation:2s linear infinite animateC}span{display:block;top:calc(50% - 2px);width:50%;height:4px;transform-origin:left;animation:2s linear infinite animate}span:before{width:16px;height:16px;border-radius:50%;background:#E91E63;top:-6px;right:-8px;box-shadow:0 0 20px #E91E63}@keyframes animateC{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes animate{0%{transform:rotate(45deg)}100%{transform:rotate(405deg)}}",
  })
);
let loc = location.href.split("/").slice(3).join("/");
accounts[loc]
  ? location.replace(accounts[loc.replace(".html")])
  : location.replace("https://home.semant.is-a.dev/" + loc);
