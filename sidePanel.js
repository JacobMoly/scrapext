
document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('tableContainer');
    const toggleButton = document.getElementById('toggleButton');

    let isVisible = false;

    function renderContent() {
        if(isVisible) {
            tableContainer.innerHTML = `<p>This is a conditionally rendered table</p>`
            toggleButton.innerText = 'Stop'

        } else{
            tableContainer.innerHTML = ''
            toggleButton.innerText = 'Start'
        }
    }
    toggleButton.addEventListener('click', function() {
        isVisible = !isVisible
        renderContent()
    })
    renderContent()
})
