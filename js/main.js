import Header from "./desktop/header.js";
import slider from "./desktop/slider.js";
import Cover from "./desktop/cover.js";
import Access from "./desktop/access.js";
import kids from "./desktop/kids.js";
import Free from "./desktop/free.js";
import Products from "./desktop/products.js";
import Comment from "./desktop/comment.js";
import Accardion from "./desktop/accardion.js";
import Final from "./desktop/final.js";
import Footer from "./desktop/footer.js";

async function allData() {
  await swiper();
}

allData();
async function swiper() {
  await Header.menu();
  await Header.login();
  await Header.show();
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
  await Products.titr();
  await Products.products();
  await Comment.coTitle();
  await Comment.comments();
  // await Accardion.accardion();
  await Accardion.tt();
  await Accardion.accordion();
  // await Accardion.acardion();
  await Final.final();
  await Footer.footer();
  await Footer.social();

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".Swiper", {
    slidesPerView: 4,
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

  var swiper = new Swiper(".comment", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
