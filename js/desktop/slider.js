async function slider() {
  let Sliders = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  Sliders = respone.slider.map((item) => {
    return `
            <div class="swiper-slide">
              <img src="${item.url}" />
            </div>
    `;
  });
  document
    .querySelector("#swiper-wrapper")
    .insertAdjacentHTML("afterbegin", Sliders.join(""));
}
export default slider;
