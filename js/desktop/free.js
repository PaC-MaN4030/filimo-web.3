// title part

async function tit() {
  let t = "";
  let data = await fetch("http://localhost:3000/freeTitle");
  let respone = await data.json();
  t = respone.map((item) => {
    return `<h5>${item.title}</h5>`;
  });
  document
    .querySelector("#content")
    .insertAdjacentHTML("afterbegin", t.join(""));
}

// slider part

async function content() {
  let free = "";
  let data = await fetch("http://localhost:3000/freeContent");
  let respone = await data.json();
  free = respone.map((item) => {
    return `<div class="swiper-slide">
              <img src="${item.url}" alt="watch it free" />
              <h5>${item.tag}</h5>
            </div>`;
  });
  document
    .querySelector("#swiper-wrapperr")
    .insertAdjacentHTML("afterbegin", free.join(""));
}

export default { content, tit };
