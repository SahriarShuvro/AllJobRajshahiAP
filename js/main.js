// // import { setupCounter } from './counter.js'
// // import javascriptLogo from './javascript.svg'
// // import './style.css'
// // import viteLogo from '/vite.svg'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// Image Preview 
{
let imageUpload = document.querySelectorAll('.imageUpload')

imageUpload.forEach(eachImageUploader => {
  let imageInput = eachImageUploader.querySelector('.formInput')
  let imgPreview = eachImageUploader.querySelector('.imgPreview')
  
  imageInput.addEventListener('change', function(){
    imgPreview.src = URL.createObjectURL(this.files[0]);
  })
});
}