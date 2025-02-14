// title part

async function coTitle() {
  let c = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  c = respone.coTitle.map((item) => {
    return `<h1>${item.title}</h1>`;
  });
  document
    .querySelector(".comments")
    .insertAdjacentHTML("afterbegin", c.join(""));
}

// comments part

async function comments() {
  let c = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  c = respone.comments.map((item) => {
    return `<div class="swiper-slide">
              <div class="top">
                <div class="prof">
                  <img
                    src="./img/comments/profile.webp"
                    alt="nothing important"
                  />
                  <h5>${item.name}</h5>
                </div>
                <img src="./img/comments/virgol.webp" alt="virgol" />
              </div>
              <p>${item.comment}</p>
            </div>`;
  });
  document
    .querySelector("#opinion")
    .insertAdjacentHTML("afterbegin", c.join(""));
}

export default { coTitle, comments };
