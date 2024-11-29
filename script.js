let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true, // Corrected this property name
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true, // Corrected this property name
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});


window.onload = () => {
    const form = document.querySelector(".search-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const a = document.getElementById("search-box");
      const pincode = a.value.trim(); 
    let status=0;
      if (pincode) {
        alert(`Entered Pin Code: ${pincode}`);
        if (pincode === "208011") {
            status=1;
            window.location.href = "ShopCategory1.html";
        } 
        if(pincode==="123456"){
            status=1;
                window.location.href = "ShopCategory2.html";
            }
        if(pincode==="182320") {
            status=1;
            window.location.href = "ShopCategory3.html";
        }
        if(status===0){
            alert(`not available yet at this pincode !`);
        }
    }
    });
  };

