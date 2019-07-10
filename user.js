// ==UserScript==
// @name         LiberOJ 复制样例
// @version      0.1
// @description  LibreOJ 自动添加复制按钮
// @author       Woshiluo
// @match        https://loj.ac/problem/*
// @license      GNU Affero General Public License v3.0
// ==/UserScript==

$(document).ready(function (){
    $("pre").prepend("<a class=\"copy-button ui button\" style=\"position: absolute;top: -1px;right: -7px;border-top-left-radius: 0px;border-bottom-right-radius: 0px\">复制</a>");
    $(".copy-button").click(function() {
        var element = $(this).siblings("code");
        var text = $(element).text();
        var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        $(this).text("复制成功");

        var e = this;
        setTimeout(function() {
            $(e).text("复制");
        }, 500);
    });
});
