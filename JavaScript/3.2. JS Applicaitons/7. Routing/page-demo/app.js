import page from '//unpkg.com/page/page.mjs'
    
    const views = {
        '/home': () =>  '<h2>Home Page</h2><p>Welcome to our site! </p>',
        '/catalog': () => '<h2>Catalog</h2><p>List of items</p>', 
        '/catalog/kitchens': () => '<h2>Kitchen equipment</h2><p>List of items</p>', 
        '/about': () => '<h2>About us</h2><p>Contact: +1-555-7915</p>'
    }
    const main = document.querySelector('main');

    page('/home', () => showContent('/home'))
    page('/catalog', () => showContent('/catalog'))
    page('/catalog/kitchens', () => showContent('/catalog/kitchens'))
    page('/about', () => showContent('/about'))
    page.start();


    showContent()

    function showContent (name) {
        const view = views[name]
        if (typeof view == 'function') {
            main.innerHTML = view()
        } else {
            main.innerHTML = '<h2>404</h2><p>Page not found </p>'
        }
    }

    
 