// title part

async function tt() {
  let t = "";
  let data = await fetch("http://localhost:3000/acarTitle");
  let respone = await data.json();
  t = respone.map((item) => {
    return `<h1>${item.title}</h1>
          <h5>${item.describtion}</h5>`;
  });
  document.querySelector("#ttle").insertAdjacentHTML("afterbegin", t.join(""));
}

// accardion part

// async function acardion() {
//   let a = "";
//   let data = await fetch("http://localhost:3000/acardion");
//   let respone = await data.json();
//   a = respone.map((item) => {
//     return `<div class="num">
//             <div class="couple">
//               <h1>${item.title}</h1>
//               <svg>
//                 <g id="ui-icon-close" viewBox="0 0 24 24">
//                   <path
//                     d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59 5.71 4.29A1 1 0 0 0 4.29 5.71L10.59 12l-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
//                   ></path>
//                 </g>
//               </svg>
//             </div>
//             <h5>${item.des}</h5>
//           </div>`;
//   });
//   document
//     .querySelector("#accordion")
//     .insertAdjacentHTML("afterbegin", a.join(""));
// }

// let accardions = document.querySelectorAll("accardion > num");
// async function accardion() {
//   accardions.forEach((item) => {
//     item.addEventListener("click", function () {
//       let childrenn = [...item.children];
//       childrenn.forEach((child) => {
//         if (child.localName === "h5") {
//           child.classList.toggle("activ");
//         }
//       });
//     });
//   });
// }

async function accordion() {
  let data = await fetch("http://localhost:3000/acardion");
  let response = await data.json();
  let a = response.map((item) => {
    return `
      <div class="num">
        <div class="couple">
          <h1>${item.title}</h1>
          <svg>
            <g id="ui-icon-close" viewBox="0 0 24 24">
              <path d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59 5.71 4.29A1 1 0 0 0 4.29 5.71L10.59 12l-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"></path>
            </g>
          </svg>
        </div>
        <h5>${item.des}</h5>
      </div>
    `;
  });

  document
    .querySelector("#accordion")
    .insertAdjacentHTML("afterbegin", a.join(""));
  Accordion();
}

function Accordion() {
  let accardions = document.querySelectorAll(".num");
  accardions.forEach((item) => {
    item.addEventListener("click", () => {
      let children = [...item.children];
      children.forEach((child) => {
        if (child.localName === "h5") {
          child.classList.toggle("activ");
        }
      });
    });
  });
}

export default { tt, accordion };
