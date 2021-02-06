
let button = document.getElementById('action-button')
let content = document.querySelector('.content');
let lstorage = window.localStorage;
let arr = [];

(function () {
    let newArr = JSON.parse(lstorage.getItem('bookmarks'));
    if (!newArr) arr = [...newArr]
})()

//  get url of current tab 
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    content.textContent = url
});

button.addEventListener('click', () => {

})

//  onclick add url to the arr 
//  check if arr is already there
//  if false add it to arr
//  render a list made of items in the url arr