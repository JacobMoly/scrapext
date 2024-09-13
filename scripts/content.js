chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message === "start"){
            start()
        } else if (request.message === "stop"){
            stop()
        }
})

function start() {
    let tagList = []
    console.log('function start: started!!!!')
    document.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        const element = e.target;
        element.style.border = '2px solid red'
        elementInfo = {
            tagName: element.tagName,
            className: element.className || null,
            text: element.innerText
        }
        tagList.append(elementInfo)
        chrome.runtime.sendMessage({elements: tagList})
    }, true)
}

function stop() {
    alert("stopped!")
}
