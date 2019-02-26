// ==UserScript==
// @name         极安全网
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在当前页面打开超链接
// @author       You
// @match        https://www.lisect.com/
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';
    $(".box a[target=_blank]").removeAttr("target");
});