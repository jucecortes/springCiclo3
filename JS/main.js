const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);