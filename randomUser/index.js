const body = document.querySelector("body");

const user = async function () {
  try {
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) throw new Error("There is an error ");
    const data = await res.json();

    return data.results[0];
  } catch (err) {
    body.insertAdjacentHTML("beforeend", `Error: ${err.message} 😑`);
  }
};

const createUser = function () {};
const res = await user();

const info = `
    <div class="container">
    <div class="container-img">
        <img src="${res.picture.large}" alt="" />
      </div>
      <div class="container-info">
        <div class="container-info-name">
          <div class="name">
            <h2 id="heading">${res.name.first} ${res.name.last}</h2>
            <p class="country">${res.location.city}, ${res.location.country}</p>
          </div>
          <div class="info">
            <p class='info-paragraph'>Email: <span>${res.email}</span></p>
            <p class='info-paragraph'>City: <span>${res.location.city}</span></p>
            <p class='info-paragraph'>State: <span>${res.location.state}</span></p>
            <p class='info-paragraph'>Country: <span>${res.location.country}</span></p>
            <p class='info-paragraph'>Phone: <span>${res.phone}</span></p>
          </div>
        </div>
      </div>
     </div>`;

body.insertAdjacentHTML("beforeend", info);
