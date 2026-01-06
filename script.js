window.addEventListener("scroll",()=>{
  const logo=document.querySelector(".logo");
  const scroll=window.scrollY;
  const scale=Math.max(0.7,1-scroll/600);
  logo.style.transform=`scale(${scale}) rotate(${scroll/6}deg)`;
});