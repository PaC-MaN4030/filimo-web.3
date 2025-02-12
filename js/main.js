import Header from "./desktop/header.js";
import slider from "./desktop/slider.js";
import Cover from "./desktop/cover.js";
import Access from "./desktop/access.js";
import kids from "./desktop/kids.js";
import Free from "./desktop/free.js";
import Footer from "./desktop/footer.js";
import Products from "./desktop/products.js";

async function allData() {
  await swiper();
}

allData();
async function swiper() {
  await Header.menu();
  await Header.login();
  await slider();
  await Cover.title();
  await Cover.pros();
  await Cover.btns();
  await Access.image();
  await Access.des();
  await Access.button();
  await Access.title();
  await Access.tvBtn();
  await Access.tvImg();
  await kids.kids();
  await kids.kidsImg();
  await Free.content();
  await Free.tit();
  await Footer.footer();
  await Footer.social();
  await Products.titr();
  await Products.products();

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".Swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
