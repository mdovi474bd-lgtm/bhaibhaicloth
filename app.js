const categories = [
  "saree",
  "three-piece",
  "hosiery",
  "fabric"
];

const productBox = document.getElementById("products");

categories.forEach(cat => {
  fetch(`products/${cat}/`)
    .then(() => {
      for (let i = 1; i <= 10; i++) {
        const img = document.createElement("img");
        img.src = `products/${cat}/${cat[0]}${i}.jpg`;
        img.onerror = () => img.remove();

        const div = document.createElement("div");
        div.className = "product";
        div.appendChild(img);

        productBox.appendChild(div);
      }
    });
});
