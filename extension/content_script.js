/*
 * Copyright (c) 2009 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

/*
var additionalInfo = {
  "title": document.title,
  "selection": window.getSelection().toString()
};

chrome.extension.connect().postMessage(additionalInfo);
*/
console.log('starting readibility');
console.assert(readability, 'missing readability');
readability.init();

var readableContent = document.getElementById('readability-content').innerHTML;
console.log('readable content', readableContent);
