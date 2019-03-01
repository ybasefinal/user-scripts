// ==UserScript==
// @name         Google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  open link in new tab
// @author       You
// @match        https://www.google.com/search?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("#rso .r>a:not(.fl)").forEach(e=>{e.target="_blank"});
    document.querySelectorAll("#rso g-scrolling-carousel a").forEach(e=>{e.target="_blank"});
})();