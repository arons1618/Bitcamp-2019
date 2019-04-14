// background.js

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});
if(document.getElementById("qwerty")){
	var a = document.getElementById("qwerty")
	a.parentElement.removeChild(a);
}
