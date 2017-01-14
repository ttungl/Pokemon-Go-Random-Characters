// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var min = 1; // min number of icons.
var max = 91; // max number of icons.

function updateIcon() {
	var rand = Math.floor((Math.random()*max) + 1); // random number
 	chrome.browserAction.setIcon({path:"icons/icon" + rand + ".png"});
	if (rand > max) // just in case ;)
		rand = min;
}

function repeater(){
	var num=0;
	window.setInterval(function () {
        updateIcon();
    }, 1000); // repeat every 01 second 	
}

window.onload = function start() {
    updateIcon();
    repeater();
}