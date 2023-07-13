import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  console.log("Tab updated", tabId, changeInfo, tab);
  
  if (changeInfo.status === "complete") {
    console.log("Tab updated", tabId, changeInfo, tab);
    
    // await browser.tabs.executeScript(tabId, {
    //   // code: `console.log(\`${code}\`)`,
    //   file: "/assets/newStyles.ts",
    //   // code: `console.log("hello?")`,
    // });
  }

  // browser.scripting.insertCSS({
  //   css,
  //   target: { tabId, allFrames: true },
    
  // }).then(() => {
  //   console.log("CSS injected");
  // }).catch((error) => {
  //   console.error("CSS injection failed", error);
  // });

  
});
