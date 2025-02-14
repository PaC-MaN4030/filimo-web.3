// title part

async function tit() {
  let t = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  t = respone.freeTitle.map((item) => {
    return `<h5>${item.title}</h5>`;
  });
  document
    .querySelector("#content")
    .insertAdjacentHTML("afterbegin", t.join(""));
}

// slider part

async function content() {
  let free = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  free = respone.freeContent.map((item) => {
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
