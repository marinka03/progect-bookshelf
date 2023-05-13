const modalContainer = document.querySelector(".modal");
const openModalButton = document.querySelector(".header__sign-up");
const backdrop = document.querySelector(".modal-overlay");


console.log(modalContainer);

function createModal() {
    // modalContainer.classList.add("modal");

backdrop.style.display = "block";


    // const input = modalContainer.insertAdjacentHTML("beforeend", `<div id-"form _content _container"›
    // «div id-"form content_inner_container"
    // <input type-"text™ id-"full name" placeholder-"Full name"› <input type="email" id-"email" placeholder= "Email", <input type= "password" id= "password" placeholder= "New Password"›
    // <input type-"text" id-"favourite_song" placeholder-"The Best Song Ever")
    // <input type-"text" id-"milk_ before_cereal" placeholder="Milk Before Cereal? ( Yes | No )"› <div id-"button_container")
    // <button onclick-"login ()"›Login‹/button> <button onclick="register ()"›Register</button>
    // </div>
    // </div>`);
    const modalTitle = document.createElement("h2");
    modalTitle.textContent = "Заголовок модального вікна";
  
    const modalContent = document.createElement("p");
    modalContent.textContent = "Тут може бути ваш контент.";
  
    const closeButton = document.createElement("button");
    closeButton.textContent = "Закрити";
    closeButton.addEventListener("click", closeModal);
  
    modalContainer.appendChild(modalTitle);
    modalContainer.appendChild(modalContent);
    modalContainer.appendChild(closeButton);
  
    modalContainer.style.display = "block";
  }

  function closeModal() {
    modalContainer.style.display = "none";
    modalContainer.innerHTML = "";
    backdrop.style.display = "none";
  }
  
  openModalButton.addEventListener("click", createModal);

