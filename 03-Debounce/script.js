// initializes ul and btn variables and link them from the html file
const ul = document.getElementById('test');
const btn = document.getElementById('btn');

// nested function that creates a list item with the text 'Test' and appends it to the empty ul
testFunc = () => {
    setTimeout(() => {
        var listItems = document.createElement('li');
        listItems.innerHTML = 'Test';
        ul.appendChild(listItems);
    }, 0);
}

// sets a timer 
function debounce(func, t) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, t);
    }
}

// delays the list items from showing for 2 seconds
const btnClick = debounce(() => testFunc(), 4000);