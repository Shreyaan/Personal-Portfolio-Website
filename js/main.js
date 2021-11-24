window.addEventListener("scroll" , function(){

    const header = document.querySelector("header");
    header.classList.toggle("stickyClass", window.scrollY >0);
});