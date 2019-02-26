// ==UserScript==
// @name         斋书苑
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  斋书苑自动书签
// @author       You
// @match        https://www.zhaishuyuan.com/chapter/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $.post("/ajax/user/",{action:"marks",shuid:escape(bid),zid:escape(zid)},function(result){console.log(result);});
    // Your code here...
})();