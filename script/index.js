window.onload = () => {
  document.querySelector('#burger').onclick = function() {
    this.classList.toggle('burgerMenu-active')
    this.classList.toggle('burgerMenu')
  } 
}