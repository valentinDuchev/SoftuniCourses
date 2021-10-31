function extractText() {
    function extractText() {
        let selectedItems = document.querySelectorAll('#items li')
        let result = '';
        for (const element of selectedItems) {
            result += element.textContent.trim() + '\n';
        }
        
        let resultElement = document.getElementById('result');
        resultElement.textContent = result;
        
    }
}