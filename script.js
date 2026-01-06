// Auto Gallery
const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const gallery = document.getElementById("gallery");

images.forEach(img=>{
  const image = document.createElement("img");
  image.src = "products/" + img;
  gallery.appendChild(image);
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(r=>{
    const top = r.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      r.classList.add("active");
    }
  });
});

console.log("ভাই ভাই স্টোর – Premium System Loaded");