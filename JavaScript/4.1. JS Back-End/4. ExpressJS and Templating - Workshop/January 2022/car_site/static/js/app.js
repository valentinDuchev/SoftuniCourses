document.getElementById('cars').addEventListener('click', (ev) => {
    if (ev.target.classList.contains('more')) {
        const btn = (ev.target);
        const desc = ev.target.parentElement.querySelector('.description');
        console.log(desc)
        if (desc.style.display == 'block') {
            desc.style.display = '';
        } else {
            desc.style.display = 'block';
        }
    }
})