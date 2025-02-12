// title part

async function titr() {
  let t = "";
  let data = await fetch("http://localhost:3000/productsTitle");
  let respone = await data.json();
  t = respone.map((item) => {
    return ` <h1>${item.title}</h1>
          <div class="option">
            <div class="each">
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
              <h5>${item.options.op1}</h5>
            </div>
            <div class="each">
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
              <h5>${item.options.op2}</h5>
            </div>
            <div class="each">
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
              <h5>${item.options.op3}</h5>
            </div>
          </div>`;
  });
  document.querySelector("#titr").insertAdjacentHTML("afterbegin", t.join(""));
}

// products part

async function products() {
  let p = "";
  let data = await fetch("http://localhost:3000/products");
  let respone = await data.json();
  p = respone.map((item) => {
    return `<div class="eachOne">
            <img
              src="${item.url}"
              alt="watch it online only on filimo"
            />
            <div class="info">
              <h1>${item.title}</h1>
              <h5>${item.director}</h5>
              <div class="genre">
                <span>${item.genre.g1}</span>
                <span>${item.genre.g2}</span>
              </div>
              <a href="#">${item.btn}</a>
            </div>
          </div>`;
  });
  document
    .querySelector("#flexable")
    .insertAdjacentHTML("afterbegin", p.join(""));
}

export default { titr, products };
