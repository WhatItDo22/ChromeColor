document.getElementById('colorPicker').addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor;'
    }, function(result) {
        document.getElementById('colorValue').textContent = 'RGB Value: ' + result[0];
    });
});
