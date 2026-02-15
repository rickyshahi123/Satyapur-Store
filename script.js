let cartCount = 0;
let cartTotal = 0;

function addToCart(name, price) {
    cartCount++;
    cartTotal += price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-total").innerText = cartTotal;

    const li = document.createElement("li");
    li.textContent = `${name} — ₹${price}`;
    document.getElementById("cart-items").appendChild(li);
}
