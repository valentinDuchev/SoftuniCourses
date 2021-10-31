function validate() {
    function focused() {

        let elements = [...document.querySelectorAll('input')];
        for (let element of elements) {
            element.addEventListener('focus', onFocus);
            element.addEventListener('blur', onBlur)
        }

        function onFocus(ev) {
            ev.target.parentNode.className = 'focused'
        }

        function onBlur(ev) {
            ev.target.parentNode.className = ''
        }
    }
}