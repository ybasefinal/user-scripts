// ==UserScript==
// @name         极安全网
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  在当前页面打开超链接
// @author       You
// @match        https://www.lisect.com/
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';
    $(".box a[target=_blank]").removeAttr("target");
    $("a:contains(字幕组)").attr("href", "http://www.zmz2019.com/");
});