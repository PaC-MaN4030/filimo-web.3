async function menu() {
  let mainmenu = "";
  let data = await fetch("http://localhost:3000/menu");
  let respone = await data.json();
  mainmenu = respone.map((item) => {
    return `<li>
                <a href="${item.href}">
                  <span>${item.title}</span>
                </a>
              </li>`;
  });
  document
    .querySelector("#right > ul")
    .insertAdjacentHTML("afterbegin", mainmenu.join(""));
}
async function login() {
  let mainbtn = "";
  let data = await fetch("http://localhost:3000/login");
  let respone = await data.json();
  mainbtn = respone.map((item) => {
    if (!!item.s) {
      return `
      <a href="${item.href}" class="subscribtion">
              <span>${item.title}</span>
              </a>`;
    } else {
      return `<a href="${item.href}" class="login">
              <span>${item.title}</span>
              </a>`;
    }
  });
  document
    .querySelector("#left")
    .insertAdjacentHTML("afterbegin", mainbtn.join(""));
}

export default { menu, login };
