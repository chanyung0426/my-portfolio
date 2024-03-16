document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY;
      let inner = document.querySelector('.trans');
      inner.style.transform = `translateX(${scrollPosition}px)`;
      let inner2 = document.querySelector('.trans2');
      inner2.style.transform = `translateX(${-scrollPosition}px)`; 
      let inner3 = document.querySelector('.trans3');
      inner3.style.transform = `translateX(${scrollPosition}px)`; 
      let inner4 = document.querySelector('.trans4');
      inner4.style.transform = `translateX(${-scrollPosition}px)`; 
    });
});