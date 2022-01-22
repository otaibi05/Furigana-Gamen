var checkbox = document.getElementById("checkboxid");
var color = document.getElementById("colorid");
var range = document.getElementById("rangeid");
var furiganaPreview = document.getElementById("furiganaid");
var theCheckBox;
var theColor;
var theRange;
chrome.storage.sync.get("theColor", function (result) {
  if (result.theColor == "" || result.theColor == null) {
    color.value = "#000000";
  }
  else {
    color.value = result.theColor;
  }
});
chrome.storage.sync.get("theRange", function (result) {
  range.value = parseInt(result.theRange);
  furiganaPreview.style.fontSize = range.value + "%";
  furiganaPreview.style.color = color.value;
});
chrome.storage.sync.get("theCheckBox", function (result) {
  if (result.theCheckBox == null) {
    checkbox.checked = true;
  }
  else {
    checkbox.checked = result.theCheckBox;
  }
  if (checkbox.checked) {
    theColor = "";
    theRange = "";
    furiganaPreview.style.fontSize = "";
    furiganaPreview.style.color = "";
    chrome.storage.sync.set({ theColor }, function () {});
    chrome.storage.sync.set({ theRange }, function () {});
  }
  else {
    color.disabled = false;
    range.disabled = false;
  }
});
checkbox.addEventListener("input", function () {
  theCheckBox = checkbox.checked;
  if (theCheckBox) {
    color.disabled = true;
    range.disabled = true;
    theColor = "";
    theRange = "";
    chrome.storage.sync.set({ theColor }, function () {});
    chrome.storage.sync.set({ theRange }, function () {});
  }
  else {
    color.disabled = false;
    range.disabled = false;
    theColor = color.value;
    chrome.storage.sync.set({ theColor }, function () {});
    theRange = range.value + "%";
    chrome.storage.sync.set({ theRange }, function () {});
  }
  chrome.storage.sync.set({ theCheckBox }, function () {});
});
color.addEventListener("input", function () {
  theColor = color.value;
  furiganaPreview.style.color = color.value;
  chrome.storage.sync.set({ theColor }, function () {});
});
range.addEventListener("input", function () {
  theRange = range.value + "%";
  furiganaPreview.style.fontSize = range.value + "%";
  chrome.storage.sync.set({ theRange }, function () {});
});