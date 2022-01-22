# Furigana Gamen

**Chrome Extension Icon**

<img src="/Furigana%20Gamen/images/furigana_gamen_icon128.png">

**Chrome Extension Description**

Furigana Gamen diplays furigana on kanji characters. It is private and works completely offline.

**Demo**

[Demo video](https://youtu.be/mXe0tqj91-A)

The console log lines were only for the demo. Both console.log() methods are instead placed in comments (not used) in the repository.

**Installation**

From Google Chrome Developers documentations:

<img src="/google_chrome_extension_developer_guide.png" height="500">

**Developement**

Furigana Gamen is an individual project that took approximately one week to complete. It has high accuracy, but it is lacking in performance efficiency and speed. I have improved the performance efficiency and speed by making the extension search through the kanji API only when necessary, but to actually make them satisfactory I would need to put in much more time than approximately one week. I would need to heavily edit the kanji API because it has too many unnecessary words and searching through those words is what makes the speed slow. I was going to implement "fast but inaccurate" as an option by assuming each kanji character's pronounciation based on its surroundings, but it was far too inaccurate to implement. If the extension was based on assumed pronounciations instead of words, it would have been near instantaneous even on bigger pages.

The kanji API I used for this project was great, but it was not meant for this type of project. It would work great for a dictionary and you can see some of the projects that used it for a dictionary on their website. I originally modified some part of the kanji API by leaving only the most common pronounciations of some common words and I also deleted many words, but I decided to remove the modifications and leave it as it is since this project was only experimental. I only removed the JSON objects that were not "words" to make the file smaller.

Furigana Gamen was actually much faster when I used innerHTML to search and replace at the start, but innerHTML interferes with event listeners and some websites like Youtube and Twitter do not even load when modifiying the innerHTML through an extension. Modifying the innerHTML could even be dangerous. React has a method called "dangerouslySetInnerHTML" to emphasize the danger of modifying the innerHTML. I stopped modfying the innerHTML and only used innerHTML for checking the status of the document body (which poses no risk since I am not modifying innerHTML). I instead used a JavaScript library called mark.js and modified it to suit the extension's needs. Since mark.js was meant to highlight words, I had to modify it to add \<ruby> instead. I also had to add "appendChild" for \<rt> and "insertAdjacentElement" for \<span>. Many kanji characters have kana characters in them, so I added a span for the start and/or end of words that have kana at the start and/or end and I left any kana characters in the middle of words as they are. I created loops inside mark.js to find and extract the kana at the start and end of each word. Regular expressions (RegEx) is used to check the status of the document body.
  
Searching and replacing specific characters becomes complex when you also have to add HTML elements to the document at those specific characters' positions without using innerHTML. It is not the same as creating a website where you can manually add them. So, I decided to modify a JavaScript highlighter library that already went through a lot of testing on a lot of different websites.

HTML, CSS, JavaScript, JSON, kanjiapi, jQuery, and a modified mark.js are used for this Google Chrome extension.

**Troubleshooting**

If you refresh the extension with the refresh icon, please make sure to reload the page you want to use the extension on.

**References**

Furigana Gamen conforms to all licenses.

[kanjiapi.dev](https://kanjiapi.dev/ "kanjiapi.dev") ([license](http://www.edrdg.org/edrdg/licence.html))

[mark.js](https://markjs.io/ "mark.js") ([license](https://raw.githubusercontent.com/julmot/mark.js/master/LICENSE))

[ベストテンFONT](https://flopdesign.booth.pm/items/2747965 "ベストテンFONT")

**Disclaimer**

This project was experimental and will not be released on the Chrome Web Store. Do not use the Google Chrome extension with an old computer. The developer is not liable for any damages the Google Chrome extension may cause. The code in this repository is free and open-source while conforming to the licenses in references.
