async function slider() {
  let Sliders = "";
  let data = await fetch("http://localhost:3000/slider");
  let respone = await data.json();
  Sliders = respone.map((item) => {
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
