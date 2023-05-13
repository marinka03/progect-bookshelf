const modalContainer = document.querySelector(".modal");
const openModalButton = document.querySelector(".header__sign-up");
const backdrop = document.querySelector(".modal-overlay");


console.log(modalContainer);

function createModal() {
    // modalContainer.classList.add("modal");

backdrop.style.display = "block";


    
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

