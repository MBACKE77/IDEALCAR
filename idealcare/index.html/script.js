document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = parseInt(product.querySelector(".price").textContent);

            // Add product to cart
            const listItem = document.createElement("li");
            listItem.textContent = `${productName} - ${productPrice} FCFA`;
            cartItems.appendChild(listItem);

            // Update total
            total += productPrice;
            cartTotal.textContent = total;
        });
    });
});
