const contentDIV = document.querySelector("#content");

function webpackTest() {
  const h1 = document.createElement("h1");
  h1.innerText = "OBA ANA BA2EIT HENA";
  h1.classList.add("display-2");
  contentDIV.appendChild(h1);
}

function loadTabMenu() {
  //div container to store tabs
  const tabContainer = document.createElement("div");
  tabContainer.classList.add("container");
  tabContainer.setAttribute("id", "tabDiv");
  // making button group
  const buttonGroupDIV = document.createElement("div");
  buttonGroupDIV.classList.add("btn-group");
  buttonGroupDIV.setAttribute("role", "group");
  buttonGroupDIV.setAttribute("aria-label", "Basic example");
  // making each button
  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("type", "button");
  aboutBtn.setAttribute("id", "aboutBtn");

  aboutBtn.classList.add("btn", "btn-outline-primary", "tab");
  aboutBtn.innerText = "About";

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("type", "button");
  menuBtn.setAttribute("id", "menuBtn");

  menuBtn.classList.add("btn", "btn-outline-primary", "tab");
  menuBtn.innerText = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("type", "button");
  contactBtn.setAttribute("id", "contactBtn");
  contactBtn.classList.add("btn", "btn-outline-primary", "tab");
  contactBtn.innerText = "Contact Us";

  //add each button to the btn group
  buttonGroupDIV.appendChild(aboutBtn);
  buttonGroupDIV.appendChild(menuBtn);
  buttonGroupDIV.appendChild(contactBtn);

  //add the group to .container
  tabContainer.appendChild(buttonGroupDIV);

  //return the tabcontainer to append inside the loadPage function()
  return tabContainer;
}

/* <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary tab">About</button>
        <button type="button" class="btn btn-outline-primary tab">Menu</button>
        <button type="button" class="btn btn-outline-primary tab">
          Contact Us
        </button>
      </div> */

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
  chef_hat.src = "http://www.mcicon.com/wp-content/uploads/2021/04/Chef-06.jpg";
  chef_hat.alt = "chef hat image";
  // append contents to image DIV
  imageDIV.append(chef_hat);

  //append the 2 divs to row
  row.append(heroDIV, imageDIV);

  // append row to container
  containerDiv.append(row);

  //FINALLY, append container and h1 to content!
  // make TabMenu to also append to content div
  contentDIV.appendChild(h1);
  const tabMenu = loadTabMenu();
  contentDIV.appendChild(tabMenu);

  contentDIV.appendChild(containerDiv);
}

export { pageLoader, loadTabMenu };
