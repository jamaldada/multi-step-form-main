const nxttwo = document.querySelector(".nextstep");
const gobackthree = document.querySelector(".gobacko");
const nxthree = document.querySelector(".nextstepo");
const gobackfour = document.querySelector(".gobacke");
const nxtfour = document.querySelector(".nextstepe");
const nxtfive = document.querySelector(".next-stp");
const gobackfive = document.querySelector(".prev-stp");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const thankspage = document.querySelector(".thankspage");
const flexone = document.querySelector(".flexone");
const flextwo = document.querySelector(".flextwo");
const flexthree = document.querySelector(".flexthree");
const flexfour = document.querySelector(".flexfour");
const forms = document.querySelectorAll(".forms input");
const switcher = document.querySelector(".switcher");
const addons = document.querySelectorAll(".payservice");
const arc = document.querySelector(".j");
const ard = document.querySelector(".e");
const are = document.querySelector(".o");
const era = document.querySelector(".x");
const erb = document.querySelector(".y");
const erc = document.querySelector(".z");

let time;
const obj = {
  plan: null,
  kind: null,
  price: null,
};

nxttwo.addEventListener("click", function () {
  container2.classList.add("hidden");
  container3.classList.remove("hidden");
  container3.style.display = "block";
  flexone.classList.remove("active");
  flextwo.classList.add("active");
});

gobackthree.addEventListener("click", function () {
  container2.classList.remove("hidden");
  container3.classList.add("hidden");
  container3.style.display = "none";
  flexone.classList.add("active");
  flextwo.classList.remove("active");
});

nxthree.addEventListener("click", function () {
  container3.classList.add("hidden");
  container4.classList.remove("hidden");
  container4.style.display = "block";
  container3.style.display = "none";
  flextwo.classList.remove("active");
  flexthree.classList.add("active");
});

gobackfour.addEventListener("click", function () {
  container3.classList.remove("hidden");
  container4.classList.add("hidden");
  container4.style.display = "none";
  container3.style.display = "block";

  flextwo.classList.add("active");
  flexthree.classList.remove("active");
});

nxtfour.addEventListener("click", function () {
  container4.classList.add("hidden");
  container5.classList.remove("hidden");
  container5.style.display = "block";
  container4.style.display = "none";

  flexthree.classList.remove("active");
  flexfour.classList.add("active");
});

gobackfive.addEventListener("click", function () {
  container4.classList.remove("hidden");
  container5.classList.add("hidden");
  container5.style.display = "none";
  container4.style.display = "block";

  flexthree.classList.add("active");
  flexfour.classList.remove("active");
});

nxtfive.addEventListener("click", function () {
  container5.classList.add("hidden");
  container5.style.display = "none";
  thankspage.classList.remove("hidden");
  thankspage.style.display = "flex";

  flexfour.classList.remove("active");
});

/* function validateForm() {
  let valid = true;
  for (let i = 0; i < forms.length; i++) {
    if (!forms[i].value) {
      valid = false;
      forms[i].classList.add("err");
    } else {
      forms[i].classList.remove("err");
    }
  }

  return valid;
}

switcher.addEventListener("click", () => {
  const val = switcher.querySelector("input").checked;
  if (val) {
    document.querySelector(".monthly").classList.remove("sw-active");

    document.querySelector(".yearly").classList.add("sw-active");
  } else {
    document.querySelector(".monthly").classList.add("sw-active");

    document.querySelector(".yearly").classList.remove("sw-active");
  }

  switchprice(val);

  obj.kind = val;
});

addons.forEach((addon) => {
  addon.addEventListener("click", (e) => {
    const addonSelect = addon.querySelector("input");
    const ID = addon.getAttribute("data-id");
    if (addonSelect.checked) {
      addonSelect.checked = false;
      addon.classList.remove("ad-selected");
      showAddon(ID, false);
    } else {
      addonSelect.checked = true;
      addon.classList.add("ad-selected");
      showAddon(addon, true);
      e.preventDefault();
    }
  });
});

function switchprice(checked) {
  const yearlyPrice = [90, 120, 150];
  const monthlyPrice = [9, 12, 15];

  const prices = document.querySelectorAll(".dprice");
  if (checked) {
    prices[0].innerHTML = `$ ${yearlyPrice[0]}/yr`;

    prices[1].innerHTML = `$ ${yearlyPrice[1]}/yr`;

    prices[2].innerHTML = `$ ${yearlyPrice[2]}/yr`;

    setTimeout(true);
  } else {
    prices[0].innerHTML = `$ ${monthlyPrice[0]}/mo`;

    prices[1].innerHTML = `$ ${monthlyPrice[1]}/mo`;

    prices[2].innerHTML = `$ ${monthlyPrice[2]}/mo`;
    setTimeout(false);
  }
}

function showAddon(ad, val) {
  const temp = document.getElementsByTagName("template")[0];
  const clone = temp.content.cloneNode(true);
  const serviceName = clone.querySelector(".service-name");
  const servicePrice = clone.querySelector(".servic-price");
  const serviceID = clone.querySelector(".selected-addon");
  if (ad && val) {
    serviceName.innerText = ad.querySelector("label").innerText;
    servicePrice.innerText = ad.querySelector(".price").innerText;
    serviceID.setAttribute("data-id", ad.dataset.id);
    document.querySelector(".addons").appendChild(clone);
  } else {
    const addons = document.querySelectorAll(".selected-addon");
    addons.forEach((addon) => {
      const attr = addon.getAttribute("data-id");
      if (attr == ad) {
        addon.remove();
      }
    });
  }
}

function setTotal() {
  const str = planPrice.innerHTML;
  const res = str.replace(/\D/g, "");
  const addonPrices = document.querySelectorAll(
    ".selected-addon .servic-price"
  );

  let val = 0;
  for (let i = 0; i < addonPrices.length; i++) {
    const str = addonPrices[i].innerHTML;
    const res = str.replace(/\D/g, "");

    val += Number(res);
  }
  total.innerHTML = `$${val + Number(res)}/${time ? "yr" : "mo"}`;
}
function setTime(t) {
  return (time = t);
}
 */
/* arc.addEventListener("click", function () {
  document.querySelector(".plan-price").textContent =
    document.querySelector(".ji").value;
  ji.style.color = " black ";
}); */

arc.addEventListener("click", function () {
  // Select the element with class "ji"
  /*  var ji = document.querySelector(".ji");

  // Change the text content of ".plan-price" to the value of ".ji"
  document.querySelector(".plan-price").textContent = ji.value;
 */

  arc.classList.add("selecte");
  ard.classList.remove("selecte");
  are.classList.remove("selecte");

  document.querySelector(".plan-price").innerHTML = "";

  const html = `
  <p class="plan-price">$89/mo</p>
     `;

  document.querySelector(".plan-price").insertAdjacentHTML("afterbegin", html);
});

ard.addEventListener("click", function () {
  /*  // Select the element with class "ji"
  var ji = document.querySelector(".ji");

  // Change the text content of ".plan-price" to the value of ".ji"
  document.querySelector(".plan-price").textContent = ji.value;
 */

  ard.classList.add("selecte");
  arc.classList.remove("selecte");
  are.classList.remove("selecte");

  document.querySelector(".plan-price").innerHTML = "";

  const html = `
  <p class="plan-price">$12/mo</p>
     `;

  document.querySelector(".plan-price").insertAdjacentHTML("afterbegin", html);
});

are.addEventListener("click", function () {
  // Select the element with class "ji"
  /* var ji = document.querySelector(".ji");

  // Change the text content of ".plan-price" to the value of ".ji"
  document.querySelector(".plan-price").textContent = ji.value;
 */

  are.classList.add("selecte");
  ard.classList.remove("selecte");
  arc.classList.remove("selecte");

  document.querySelector(".plan-price").innerHTML = "";

  let ads = 15;
  const html = `
  <p class="plan-price">$${ads}/mo</p>
     `;

  document.querySelector(".plan-price").insertAdjacentHTML("afterbegin", html);
});

era.addEventListener("click", function () {
  document.querySelector(".servic-price").innerHTML = "";
  const html = `
  <span class="servic-price">+$1/mo</span>
  `;

  document
    .querySelector(".servic-price")
    .insertAdjacentHTML("afterbegin", html);
});

erb.addEventListener("click", function () {
  document.querySelector(".servic-price").innerHTML = "";
  const html = `
  <span class="servic-price">+$2/mo</span>


  
  `;

  document
    .querySelector(".servic-price")
    .insertAdjacentHTML("afterbegin", html);
});

erc.addEventListener("click", function () {
  document.querySelector(".servic-price").innerHTML = "";
  const html = `
  <span class="servic-price">+$2/mo</span>
  `;

  document
    .querySelector(".servic-price")
    .insertAdjacentHTML("afterbegin", html);
});

(function () {
  document.querySelector(".total").innerHTML = "";
  const html = `
  <p class="total">Total (per month) <b>+$120/mo</b></p>
  `;

  document.querySelector(".total").insertAdjacentHTML("afterbegin", html);
});
