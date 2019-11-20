// ==UserScript==
// @name         Evaluate automatically
// @namespace    http://happyers.top/
// @version      1.0.0
// @description  自动评价
// @author       HAPPY
// @match        http*://evaluation.xidian.edu.cn/*
// @run-at       document-end
// ==/UserScript==


function pad(num) {
  if (num < 10) {
    return '0' + num.toString();
  } else {
    return num;
  }
}

function getPath(questionIndex) {
  var preIndex = 32;
  return '#\\' + (preIndex + Math.floor(questionIndex / 100)) + ' ' +
      pad((questionIndex % 100)) + ' > div:nth-child(1) > label';
}

(function() {
'use strict';
var currentURL = window.location.href;
var question_number = 9;
var base_index = 98;
for (var i = base_index; i < base_index + question_number; i++) {
  console.log(getPath(i));
  var ele = document.querySelector(getPath(i));
  if (ele != null) {
    ele.click();
  }
}
document.querySelector('#\\32 98 > div:nth-child(1) > label').click();
})();