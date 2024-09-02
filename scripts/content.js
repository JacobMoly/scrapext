let scrapingEnabled = false;

document.addEventListener('click', (event) => {
    if(scrapingEnabled){
        event.preventDefault() // prevent the default action like clicking a link or whatever
        let clickElementText = event.target.innerText.trim();
        if(clickedElementText){
            // send the text content to the extensions side panel
            chrome.runtime.sendMessage({action: 'elementClicked', text: clickedElementText})
        }
    }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == 'elementClicked'){
        scrapingEnabled = message.enabled
    }
})
