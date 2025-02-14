// list part

async function footer() {
  let f = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  f = respone.footerList.map((item) => {
    if (!!item.links) {
      return `<li class="lists">
                <h5>${item.title}</h5>
                 <div class="li">
                 <h6>${item.links.title1}</h6>
                 <h6>${item.links.title2}</h6>
                 <h6>${item.links.title3}</h6>
                 <h6>${item.links.title4}</h6>
                 <h6>${item.links.title5}</h6>
                  <div class="arrow-down"></div>
                </div>
              </li>`;
    } else {
      return `<li>
        <h5>${item.title}</h5>
      </li>`;
    }
  });
  document
    .querySelector("#footer")
    .insertAdjacentHTML("afterbegin", f.join(""));
}

// social part

async function social() {
  let s = "";
  let data = await fetch("https://pac-man4030.github.io/db.local/db.json");
  let respone = await data.json();
  s = respone.social.map((item) => {
    return `<h6>${item.title}</h6>`;
  });
  document.querySelector("#li").insertAdjacentHTML("afterbegin", s.join(""));
}

export default { footer, social };
