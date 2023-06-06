if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};

function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
    // totalPrice-=$('.product-box"').price
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  // updateTotal()
}
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const cartQuantity = document.querySelector(".cart-quantity");
  const cartTotal = document.querySelector(".Total-price");
  let itemCount = 0;
  let totalPrice = 0;

  document.querySelectorAll(".add-cart").forEach(function (icon) {
    icon.addEventListener("click", function () {
      itemCount++;
      cartQuantity.value = itemCount;
      totalPrice += parseFloat(
        this.parentElement.querySelector(".price").textContent.slice(1)
      );
      cartTotal.textContent = "$" + totalPrice.toFixed(2);
    });
  });
});

$(document).on("click", ".cart-remove", function () {
  $(this).closest(".cart-box").remove();
  // updateTotal();
});

$(".add-cart").click(function () {
  var productBox = $(this).closest(".product-box");
  var productTitle = productBox.find(".product-title").text();
  var productPrice = productBox.find(".price").text();
  var cartContent = $(".cart-content");
  var totalPriceElement = $(".Total-price");

  var cartBox = $("<div>").addClass("cart-box");
  var cartImg = $("<img>")
    .addClass("cart-img")
    .attr("src", productBox.find(".img").attr("src"));
  var detailBox = $("<div>").addClass("detail-box");
  var cartProductTitle = $("<div>")
    .addClass("cart-product-title")
    .text(productTitle);
  var cartPrice = $("<div>").addClass("cart-price").text(productPrice);
  var cartQuantity = $("<input>")
    .attr("type", "number")
    .addClass("cart-quantity")
    .val(1);
  var cartRemove = $("<i>").addClass("bx bxs-trash-alt cart-remove");

  detailBox.append(cartProductTitle, cartPrice, cartQuantity);
  cartBox.append(cartImg, detailBox, cartRemove);
  cartContent.append(cartBox);
});
document
  .getElementsByClassName("btn-buy")[0]
  .addEventListener("click", buyButtonClicked);
function buyButtonClicked() {
  alert("your order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
}
