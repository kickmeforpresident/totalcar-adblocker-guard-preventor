(async () => {
    const src = chrome.extension.getURL('src/js/main.js');
    const contentScript = await import(src);
    contentScript.main();
})();