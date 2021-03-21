
let imagesDOMElement = document.querySelectorAll("img")

imagesDOMElement.forEach(element => {
    element.setAttribute('loading', 'lazy')
});