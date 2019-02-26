// ==UserScript==
// @name         起点
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  起点书架排序
// @author       You
// @match        https://my.qidian.com/bookcase
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function resort() {
        if (window.$ !== undefined) {
            $("tr:has(.yesReadStatus):last").after($("tr:has(.noReadStatus)"));
        } else {
            setTimeout(resort, 1);
        }
    }
    resort();
})();