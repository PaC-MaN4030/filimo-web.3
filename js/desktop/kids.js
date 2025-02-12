// img part

async function kidsImg() {
  let img = "";
  let data = await fetch("http://localhost:3000/kidsImg");
  let respone = await data.json();
  img = respone.map((item) => {
    return `<img src="${item.imgUrl}" />`;
  });
  document
    .querySelector("#rightk")
    .insertAdjacentHTML("afterbegin", img.join(""));
}

// text part

async function kids() {
  let animation = "";
  let data = await fetch("http://localhost:3000/kids");
  let respone = await data.json();
  animation = respone.map((item) => {
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
