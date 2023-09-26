// innerHTML
// testContent
// insertAdjacentHTML text HTML and you can insert it into a given position
const data = 120
const temp =  `<p>${data}</p>`
document.body.textContent = temp; 
document.body.innerHTML = temp; 

const template = ` <p>Warning: We don't ship to the US</p>`;
document.querySelector('header').insertAdjacentHTML('beforeend', template)


