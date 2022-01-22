chrome.action.onClicked.addListener((tab) => {
  chrome.action.setBadgeText({ text: "LOAD" });
  chrome.action.setBadgeBackgroundColor({ color: "#FFA500" });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    chrome.action.setBadgeText({ text: "" });
    sendResponse({ OK: "OK" });
  }
);