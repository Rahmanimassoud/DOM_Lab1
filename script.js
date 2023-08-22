

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// // 1.Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main');

// // 2.Set the background color of mainElto the value stored in the --main-bgCSS custom property.s
mainEl.style.backgroundColor = "var(--main-bg)";


// // 3.Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// // 4.Add a class of flex-ctrto mainEl.
mainEl.classList.add('flex-ctr');


// // Task 2.0 Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');

// //2.1 Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%';

// // 2.2 Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// // 2.3 Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add('flex-around');


// Task 3.0 iterate over the menulinks
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

for(let link of menuLinks){
    const linkElement = document.createElement('a');
    linkElement.href = link.href;
    linkElement.textContent = link.text;
    topMenuEl.appendChild(linkElement);
}