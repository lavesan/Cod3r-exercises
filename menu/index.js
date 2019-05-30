window.onhashchange = function (e) {
    let { oldURL, newURL } = e;
    oldURL = oldURL.split('#')[1];
    newURL = newURL.split('#')[1];
    console.log('newURL: ', newURL, 'oldURL: ', oldURL);
    const oldSelected = document.querySelector(`.menu-nav a[href='#${oldURL}']`);
    const newSelected = document.querySelector(`.menu-nav a[href='#${newURL}']`);
    oldSelected && oldSelected.classList.remove('selected');
    newSelected && newSelected.classList.add('selected');
}