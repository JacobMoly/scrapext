let scrapeButton = document.getElementById('scrapeButton')
let scrapeStatus = false


function startScrape(){
    console.log(`the old scrape status was: ${scrapeStatus}`)
    if(scrapeStatus == false){
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            var activeTab = tabs[0]
            console.log(`active tab: ${activeTab.id}`)
            chrome.tabs.sendMessage(activeTab.id, {"message":"start"})
        })
        scrapeStatus = true
        scrapeButton.innerText = 'End Scrape'
    } else {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            
            var activeTab = tabs[0]
            console.log(`active tab: ${activeTab.id}`)
            chrome.tabs.sendMessage(activeTab.id, {"message":"stop"})
        })
        scrapeStatus = false
        scrapeButton.innerText = 'Start Scrape'
    }
    // } else {
    //     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    //         var activeTab = tabs[0]
    //         chrome.tabs.sendMessage(activeTab.id, {"message": "stop"})
    //     })
    //     scrapeStatus = false
    //     scrapeButton.innerText = 'Start Scrape'
    // }
    
    // if (scrapeStatus == false){
    //     scrapeStatus = true
    //     console.log(`the new scrape status is: ${scrapeStatus}`)
    //     scrapeButton.innerText = "End Scrape"
    //     chrome.runtime.sendMessage('message', function(response) {
    //         Appstatus = true
    //         console.log(Appstatus);
    //     });
    // } else {
    //     scrapeStatus = false
    //     scrapeButton.innerText = "Start Scrape"
    //     console.log(`the new Scrape status is ${scrapeStatus}`)
    //     chrome.runtime.sendMessage('message', function(response) {
    //         Appstatus = false
    //         console.log(Appstatus);
    //     });
}
scrapeButton.addEventListener('click', () => startScrape())