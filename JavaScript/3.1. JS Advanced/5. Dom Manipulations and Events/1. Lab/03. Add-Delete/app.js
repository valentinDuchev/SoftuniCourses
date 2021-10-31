function addItem() {
    function addItem() {
        let input = document.getElementById('newItemText');
        let list = document.getElementById('items');
        let newItem = document.createElement('li');
        newItem.textContent = input.value;
        list.appendChild(newItem)
        input.value = '';

        let deleteBtn = createElement('a', '[Delete]');
        deleteBtn.href = '#';
        deleteBtn.addEventListener('click', (ev) => {
            newItem.remove();
        });
        newItem.appendChild(deleteBtn)

        function createElement(type, content) {
            let element = document.createElement(type);
            element.textContent = content;
            return element;
        }

    }
}