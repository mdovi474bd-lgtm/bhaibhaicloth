const threePieceImages = [
  "products/three-piece/p1.jpg",
  "products/three-piece/p2.jpg",
  "products/three-piece/p3.jpg"
];

const sareeImages = [
  "products/saree/s1.jpg",
  "products/saree/s2.jpg"
];

function loadProducts(id, images) {
  const box = document.getElementById(id);
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    box.appendChild(img);
  });
}

loadProducts("threePiece", threePieceImages);
loadProducts("saree", sareeImages);