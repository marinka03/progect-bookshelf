const modalContainer = document.querySelector(".modal");
const openModalButton = document.querySelector(".header__sign-up");
const backdrop = document.querySelector(".modal-overlay");


console.log(modalContainer);

function createModal() {
    // modalContainer.classList.add("modal");

backdrop.style.display = "block";


    modalContainer.insertAdjacentHTML("beforeend", ` <div class="form">

    <div class="email"></div>
    
    <label for="email">Email</label>
    <input type-"email"
    name="email"
    id="email"
    placeholder="write your email">
    <div class="pass">
    <label for="password">password</label>
     <input type="password" 
     name= "password" 
     id="password"
    placeholder="write your password">
    </div>
    </div>
    <button id-"submit-btn">Sighn up</button>`)
    // const modalTitle = document.createElement("h2");
    // modalTitle.textContent = "Заголовок модального вікна";
  
    // const modalContent = document.createElement("p");
    // modalContent.textContent = "Тут може бути ваш контент.";
  
    const closeButton = document.createElement("button");
    closeButton.textContent = "Закрити";
    closeButton.addEventListener("click", closeModal);
  
    // modalContainer.appendChild(modalTitle);
    // modalContainer.appendChild(modalContent);
    modalContainer.appendChild(closeButton);
  
    modalContainer.style.display = "block";
  }

  function closeModal() {
    modalContainer.style.display = "none";
    modalContainer.innerHTML = "";
    backdrop.style.display = "none";
  }
  
  openModalButton.addEventListener("click", createModal);

