// ==UserScript==
// @name         Mouse chaser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  research tool
// @author       Chen, Will
// @match        *://*/*
// @grant        none
// @copyright 2018, cherylqian (https://openuserjs.org//users/cherylqian)
// @updateURL https://openuserjs.org/meta/cherylqian/Mouse_chaser.meta.js
// @license MIT
// ==/UserScript==

(function () {
  'use strict';
  window.onload = () => {
    let mouseChaser = document.getElementsByTagName("body")[0];
    let newDiv = mouseChaser.cloneNode(true);
    newDiv.style.zIndex = -1;
    newDiv.style.filter = "blur(2rem)";
    document.body.appendChild(newDiv);
  };
  window.onmousemove = (event) => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const boxSize = 100;
    let x = event.clientX;
    let y = event.clientY;
    document.getElementsByTagName("body")[0].style.clipPath =
      `inset(${y - boxSize}px ${width - x - boxSize}px ${height - y - boxSize}px ${x - boxSize}px)`;
  };
})();

