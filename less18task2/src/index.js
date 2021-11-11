import "../index.css"

import JS_IMG from '../assets/jslogo.png'

const h1Element = document.createElement('h1')
h1Element.textContent = 'I love JavaScript'
//jsImageHtml.append(h1Element)
const jsImageHtml = document.createElement('img')
jsImageHtml.className ='js-image'
jsImageHtml.src = JS_IMG

document.body.append(h1Element)

document.body.append(jsImageHtml)



console.log('====================================');
console.log('Hi!!!!!!!!!!!!');
console.log('====================================');