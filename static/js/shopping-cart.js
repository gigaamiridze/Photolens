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

// Remove product from cart
const removeBtn = document.getElementsByClassName("remove-btn");
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i];
  button.addEventListener('click', removeItem);
}

function removeItem(event) {
  btnClicked = event.target;
  btnClicked.parentElement.parentElement.parentElement.remove();
}