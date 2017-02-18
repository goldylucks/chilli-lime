import imagesData from './imagesData'
import './app.css'

window.onload = init

export default function init () {
  console.log('init!')
  renderImages()
  el('map-icon').addEventListener('click', onMapClick)
  el('phone-icon').addEventListener('click', onPhoneClick)
}

function renderImages () {
  el('images').innerHTML =  imagesData.reduce((html, image) => {
    html += `
      <article class='image-container'>
        <img src='images/${image.file}' />
        <p class='description'>${image.description}</p>
        <span class='price'>$${image.price}</span>
      </article>
    `
    return html
  }, '')
}

function onMapClick () {
  // open map modal here
}

function onPhoneClick () {
  // open phone modal here with copy to clipboard and click to call options
}



function el (id) {
  return document.getElementById(id)
}