// img part

async function kidsImg() {
  let img = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  img = respone.kidsImg.map((item) => {
    return `<img src="${item.imgUrl}" />`;
  });
  document
    .querySelector("#rightk")
    .insertAdjacentHTML("afterbegin", img.join(""));
}

// text part

async function kids() {
  let animation = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  animation = respone.kids.map((item) => {
    return `<div class="up" id="up">
            <h1>${item.text.title}</h1>
            <h5>${item.text.describtion}</h5>
          </div>
          <div class="down" id="down">
            <a href="${item.btns.href1}">${item.btns.btn1}</a>
            <a href="${item.btns.href2}">${item.btns.btn2}</a>
          </div>`;
  });
  document
    .querySelector("#leftk")
    .insertAdjacentHTML("afterbegin", animation.join(""));
}

export default { kids, kidsImg };
