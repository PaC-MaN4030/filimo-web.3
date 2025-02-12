// img

async function image() {
  let img = "";
  let data = await fetch("http://localhost:3000/accessImg");
  let respone = await data.json();
  img = respone.map((item) => {
    return `<img src="${item.url}" alt="what ever" />`;
  });
  document
    .querySelector("#rightA")
    .insertAdjacentHTML("afterbegin", img.join(""));
}

// describtion

async function des() {
  let passage = "";
  let data = await fetch("http://localhost:3000/device");
  let respone = await data.json();
  passage = respone.map((item) => {
    if (!item.url) {
      return `<div class="container">
            <h1>${item.title}</h1>
            <span>${item.describtion}</span>
          </div>`;
    } else {
      return `<div class="flex-container">
            <img src="${item.url}" alt="icon" />
            <div class="title">
              <h1>${item.title}</h1>
              <span>${item.describtion}</span>
            </div>
          </div>`;
    }
  });
  document
    .querySelector("#leftA")
    .insertAdjacentHTML("afterbegin", passage.join(""));
}

// btn

async function button() {
  let btn = "";
  let data = await fetch("http://localhost:3000/subBtn");
  let respone = await data.json();
  btn = respone.map((item) => {
    return `<a href="${item.href}">${item.tag}</a>`;
  });
  document
    .querySelector("#btnSub")
    .insertAdjacentHTML("afterbegin", btn.join(""));
}

// tv part

// title

async function title() {
  let tv = "";
  let data = await fetch("http://localhost:3000/TVtitle");
  let respone = await data.json();
  tv = respone.map((item) => {
    if (!item.url) {
      return `<div class="title">
            <h1>${item.title}</h1>
            <h5>${item.describtion}</h5>
          </div>`;
    } else {
      return `<div class="flex-container">
            <img src="${item.url}" alt="filimo tv" />
            <div class="contain">
              <h1>${item.title}</h1>
              <span>${item.describtion}</span>
            </div>
          </div>`;
    }
  });
  document
    .querySelector("#rightT")
    .insertAdjacentHTML("afterbegin", tv.join(""));
}

// tv btn

async function tvBtn() {
  let tbtn = "";
  let data = await fetch("http://localhost:3000/TVbtn");
  let respone = await data.json();
  tbtn = respone.map((item) => {
    return `<a href="${item.href}">${item.title}</a>`;
  });
  document
    .querySelector("#education")
    .insertAdjacentHTML("afterbegin", tbtn.join(""));
}

// tv img

async function tvImg() {
  let image = "";
  let data = await fetch("http://localhost:3000/TVimg");
  let respone = await data.json();
  image = respone.map((item) => {
    return `<img
            src="${item.url}"
            alt="choose filimo for better access"
          />`;
  });
  document
    .querySelector("#leftT")
    .insertAdjacentHTML("afterbegin", image.join(""));
}

export default { image, des, button, title, tvBtn, tvImg };
