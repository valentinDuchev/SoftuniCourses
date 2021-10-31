function deleteByEmail() {
    function deleteByEmail() {

        let input = document.getElementsByName('email')[0].value;
        let emails = [...document.querySelectorAll('tbody>tr')];
        let result = document.getElementById('result');
        for (let i = 0; i < emails.length; i++) {
            if (input == (emails[i].children[1].textContent)) {
                emails[i].remove();
                result.textContent = 'Deleted.';
            } else {
                result.textContent = 'Not found.';
            }
        }

    }
}