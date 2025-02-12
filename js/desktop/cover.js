// first js

async function title() {
  let t = "";
  let data = await fetch("http://localhost:3000/cover");
  let respone = await data.json();
  let flat = await respone.flat();
  t = flat.map((item) => {
    if (!!item.s) {
      return `<span class="first">${item.subject}</span>`;
    } else if (!item.s) {
      return `<span class="sec">${item.subject}</span>`;
    }
  });
  document.querySelector("#Cover").insertAdjacentHTML("afterbegin", t.join(""));
}

// second js

async function pros() {
  let option = "";
  let data = await fetch("http://localhost:3000/pros");
  let respone = await data.json();
  option = respone.map((item) => {
    return `  <div id="icon">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#00b80c"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
                    fill="#04f000"
                  ></path>
                </g>
              </svg>
              <h5>${item.title}</h5>
            </div>`;
  });
  document
    .querySelector("#pros")
    .insertAdjacentHTML("afterbegin", option.join(""));
}

// third js

async function btns() {
  let btn = "";
  let data = await fetch("http://localhost:3000/btn");
  let respone = await data.json();
  btn = respone.map((item) => {
    if (!!item.s) {
      return ` <a href="${item.href}" class="subs">${item.title}</a>`;
    } else if (!item.s) {
      return `<a href="${item.href}" class="primery">${item.title}</a>`;
    }
  });
  document
    .querySelector("#btns")
    .insertAdjacentHTML("afterbegin", btn.join(""));
}

export default { title, pros, btns };
