// Cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
    openLightbox();
}

function openLightbox() {
    $('body').addClass('open');
}

// Close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
    closeLightbox();
} 

function closeLightbox() {
    $('body').removeClass('open');
}