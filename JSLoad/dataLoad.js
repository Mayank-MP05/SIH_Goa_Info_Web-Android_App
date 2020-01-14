const randColors = () => {
  const color = ["primary", "secondary", "dark", "light", "warning", "success", "danger", "info"]
  let mi = parseInt(7 * Math.random());
  return color[mi];
}

const loadCards = () => {
  const parentElement = document.querySelector("#CardsHere");

  dbObj = JSON.parse(db);
  let html = '';
  dbObj.map(obj => {
    html += SingleCard(obj);
  })
  parentElement.innerHTML = html;
}
const showCons = (e) => {
  //console.log(e)
}
const SingleCard = (obj) => {
  let id = parseInt(obj.id);
  let b = obj;
  return `
            <div class="col-md-6 col-lg-4" onclick="">
            <div class="card">
            <img class="card-img-top w-100 d-block" src="./images/goa-places-card-img/${obj.img}" />
            <div class="card-body">
                <h4 class="card-title">${obj.title}</h4>
                <p class="card-text">
                 ${obj.little_desc}
                </p>
            </div>
            <button type="button" class="btn btn-outline-success btn-small" data-toggle="modal" data-target="#exampleModalCenter" onclick="modalDataPass(${id})">
              Read More ...
            </button>
            </div>
        </div>
        `;
}

function modalDataPass(id1) {
  console.log(id1);
  let obj = dbObj[parseInt(id1) - 1];
  console.log(obj);
  setTimeout(function (id1) {
    let index = parseInt(id1) - 1;

    let oldH = document.getElementById("exampleModalCenter")
    let dmxtitle = document.querySelector("#exampleModalLongTitle");
    let dmxbody = document.querySelector("#dmxc-body")
    const printTags = () => {
      let p = '<div class="row justify-content-center p-2">';
      for (let i of obj.tag) {
        p += `
        <span class="badge badge-${randColors()} p-1 m-1">${i}</span>
        `
      }
      p += "</div>"
      return p;
    }
    let bodyHtml = `          
    <img class="img img-fluid" src="./images/goa-places-card-img/${obj.img}">
    ${printTags()}
    <hr>
    ${obj.little_desc}
    <hr>
    ${obj.big_desc}`

    dmxtitle.innerHTML = obj.title;
    dmxbody.innerHTML = bodyHtml;
  }, 10);
}
window.onload = loadCards;
