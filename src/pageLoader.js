const contentDIV = document.querySelector("#content");

function webpackTest() {
  const h1 = document.createElement("h1");
  h1.innerText = "OBA ANA BA2EIT HENA";
  h1.classList.add("display-2");
  contentDIV.appendChild(h1);
}

function pageLoader() {
  //making h1
  const h1 = document.createElement("h1");
  h1.innerText = "Le Chad Restaurant";
  h1.classList.add("display-1", "mainTitle");

  //making container div
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  //making row to add columns
  const row = document.createElement("div");
  row.classList.add("row");

  //making 1st column and it's contents
  const heroDIV = document.createElement("div");
  heroDIV.classList.add("col-6");
  const heroTitle = document.createElement("h2");
  heroTitle.innerText = "Our Goals";
  heroTitle.classList.add("display-5", "subTitle");
  const heroParagraph = document.createElement("p");
  heroParagraph.innerText = `We are a restaurant devoted to serving our customers with the most
  chad menu items.`;
  heroParagraph.classList.add("lead");

  // append contents to heroDIV
  heroDIV.append(heroTitle, heroParagraph);

  // make image DIV
  const imageDIV = document.createElement("div");
  imageDIV.classList.add("col-6");
  const chef_hat = document.createElement("img");
  chef_hat.classList.add("img-fluid", "chef-hat");
  chef_hat.src =
    "https://cdn-icons.flaticon.com/png/512/883/premium/883625.png?token=exp=1642114186~hmac=3b5077ec28652536c5ec3bddbdf8761b";
  chef_hat.alt = "chef hat image";
  // append contents to image DIV
  imageDIV.append(chef_hat);

  //append the 2 divs to row
  row.append(heroDIV, imageDIV);

  // append row to container
  containerDiv.append(row);

  //FINALLY, append container and h1 to content!
  contentDIV.appendChild(h1);
  contentDIV.appendChild(containerDiv);
}

{
  /* <h1 class="display-1 mainTitle">Le Chad Restaurant</h1>
<div class="container">
  <div class="row">
    <div class="col-6">
      <h2 class="display-5 subTitle">Our Goal</h2>
      <p class="lead hero-p">
        We are a restaurant devoted to serving our customers with the most
        chad menu items.
      </p>
    </div>
    <div class="col-6">
      <img
        class="img-fluid chef-hat"
        src="https://cdn-icons.flaticon.com/png/512/883/premium/883625.png?token=exp=1642114186~hmac=3b5077ec28652536c5ec3bddbdf8761b"
        alt="chef hat image"
      />
    </div>
  </div>
</div> */
}

module.exports = pageLoader();
