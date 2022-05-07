// Cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

// Open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
  openBackground();
}

function openBackground() {
  $('body').addClass('open');
}

// Close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
  closeBackground();
}

function closeBackground() {
  $('body').removeClass('open');
}

// Cart working
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready();
}

// Making function
function ready() {
  // Remove item from cart
  const removeBtn = document.getElementsByClassName("remove-btn");
  for (var i = 0; i < removeBtn.length; i++) {
    var button = removeBtn[i];
    button.addEventListener('click', removeItem);
  }
}

// Remove item from cart
function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.parentElement.remove();
}