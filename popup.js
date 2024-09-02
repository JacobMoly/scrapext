document.getElementById('newScript').addEventListener('click', () => {
    // toggle the scraping mode
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: toggleScrapingMode,
        })
    })
})

const toggleScrapingMode = () => {
    const enabled = !window.scrapingEnabled;
    window.scrapingEnabled = enabled;
    chrome.runtime.sendMessage({action: 'toggleScraping', enabled: enabled})
    if (enabled) {
        console.log('scraping mode enabled. click on an element to scrape its text!')
    } else {
        console.log('scraping mode disabled')
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.action = 'elementClicked'){
        const ul = document.getElementById('scrapedData');
        const li = document.createElement('li');
        li.textContent = message.text;
        ul.appendChild(li)
    }
})
