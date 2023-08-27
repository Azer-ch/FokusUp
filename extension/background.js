chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"), // Replace with your Next.js app's entry point
    type: "panel", // You can experiment with different types like 'normal', 'popup', etc.
    width: 800,
    height: 600,
  });
});
