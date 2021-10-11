function addItem() {
    function addItem() {

        let input = document.getElementById('newItemText');
        let list = document.getElementById('items');

        let newItem = document.createElement('li');
        newItem.textContent = input.value;
        list.appendChild(newItem);
        input.value = '';
    }
}