chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "PAGE_CLICK") {
    console.log(
      `[EXTENSÃO] Clique detectado na aba ${sender.tab.id}`,
      `Elemento: ${msg.element}`,
      `URL: ${sender.tab.url}`
    );''
  }
});