function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    scrollToTopBtn.classList.remove("fade-out");
  }
  
  window.onscroll = function () {
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      scrollToTopBtn.classList.add("show-button");
    } else {
      scrollToTopBtn.classList.add("fade-out");
    }
  };