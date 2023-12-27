// Sample products data (can be fetched from a backend)
const products = [
  { id: 1, title: "Product 1", price: 199.99, image: "chair.jpg" },
  { id: 2, title: "Product 2", price: 29.99, image: "pen.png" },
  // Add more products as needed...
];

// Function to display products on the page
function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.image;
    productCard.appendChild(image);

    const title = document.createElement("div");
    title.classList.add("product-title");
    title.textContent = product.title;
    productCard.appendChild(title);

    const price = document.createElement("div");
    price.classList.add("product-price");
    price.textContent = `$${product.price}`;
    productCard.appendChild(price);

    productsContainer.appendChild(productCard);
  });
}

// Call the function to display products when the page loads
window.onload = displayProducts;
