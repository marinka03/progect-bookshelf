const modalContainer = document.querySelector(".modal");
const openModalButton = document.querySelector(".header__sign-up");
const backdrop = document.querySelector(".modal-overlay");


console.log(modalContainer);

function createModal() {
    // modalContainer.classList.add("modal");

backdrop.style.display = "block";


    // modalContainer.insertAdjacentHTML("beforeend", `<div class="form">
    // <div class="name"></div>
    
    // <label for="name">Name</label>
    // <input type="name"
    // name="name"
    // id="name"
    // placeholder="write your name">


    // <div class="email"></div>
    
    // <label for="email">Email</label>
    // <input type-"email"
    // name="email"
    // id="email"
    // placeholder="write your email">
    // <div class="pass">
    // <label for="password">password</label>
    //  <input type="password" 
    //  name= "password" 
    //  id="password"
    // placeholder="write your password">
    // </div>
    // </div>
    // <button id="sighn-up">Sighn up</button>`)


    // const modalTitle = document.createElement("h2");
    // modalTitle.textContent = "Заголовок модального вікна";
  
    // const modalContent = document.createElement("p");
    // modalContent.textContent = "Тут може бути ваш контент.";
  
    // const closeButton = document.createElement("button");
    const closeButton = document.querySelector(".closeButton");

    const close = closeButton.addEventListener("click", closeModal);
  
    // modalContainer.appendChild(modalTitle);
    // modalContainer.appendChild(modalContent);
    modalContainer.appendChild(closeButton);
  
    modalContainer.style.display = "block";
  }
  
  

  function closeModal() {
    modalContainer.style.display = "none";
    // modalContainer.innerHTML = "";
    backdrop.style.display = "none";
  }
  
  openModalButton.addEventListener("click", createModal);



  // Import the functions you need from the SDKs you need
 
 

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'firebase/auth';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const sighnUpBtn = document.getElementById("sighn-up")
const sighnInBtn = document.getElementById("sighn-in")
const sighnOutBtn = document.getElementById("sighn-out")
sighnUpBtn.addEventListener("click", register);
sighnInBtn.addEventListener("click", login);
sighnOutBtn.addEventListener("click", signOutUser);


const firebaseConfig = {
  apiKey: "AIzaSyC6_3JGFTbHH7w50Kv4NMidw8vHUEsiuKI",
  authDomain: "book-list-2a4ef.firebaseapp.com",
  projectId: "book-list-2a4ef",
  storageBucket: "book-list-2a4ef.appspot.com",
  messagingSenderId: "150834791024",
  appId: "1:150834791024:web:ed6d52dbf29190ef7d6ab5",
  measurementId: "G-WET36RWZYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// const auth = firebase.auth(app);
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// const database = getDatabase(app);

const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
console.log(email, password);

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
   
//     console.log('Учетная запись успешно создана:', user);

//     // const database_ref = database.ref()

//     // const user_data = {
//     //     email: email,
//     //     name: name,
//     //     last_login: Date.now(),
//     // }
//     // ...
// //     database_ref.child('users/' + user.uid).set(user_data)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // alert(errorMessage)
//   });

  function register(){
    const sighnUpEmail = email.value;
    const sighnUpName = name.value;
    const sighnUpPassword = password.value;
    createUserWithEmailAndPassword(auth, sighnUpEmail, sighnUpPassword, sighnUpName)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        alert('Учетная запись успешно создана:', sighnUpName);
    
        // const database_ref = database.ref()
    
        // const user_data = {
        //     email: email,
        //     name: name,
        //     last_login: Date.now(),
        // }
        // ...
    //     database_ref.child('users/' + user.uid).set(user_data)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage)
        console.log(errorMessage + errorCode)
      });
  }

  function login(){
    const sighnUpEmail = email.value;
    const sighnUpName = name.value;
    const sighnUpPassword = password.value;
    signInWithEmailAndPassword(auth, sighnUpEmail, sighnUpPassword, sighnUpName)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        alert('С возвращением:', sighnUpName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage)
        console.log(errorMessage + errorCode)
      });
  }
   
   
  const userCard = document.querySelector('.user-info');
//   console.log(userCard)
  function checkCurentUser() {
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      userCard.textContent = 'loged in';
// openModalButton.style.display = "none";
    //   openModalButton.innerHTML = `<button type="button">You are in </button>`;
      
   
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
checkCurentUser();

function signOutUser () {
    signOut(auth).then(() => {
        // Sign-out successful.
        userCard.textContent = 'Sighn up';
        alert('bye');

      }).catch((error) => {
        // An error happened.
      });
}

//   function validateemail(email) {
// expression = /^[^@]+@\w+(\.\w+)+\w$/
// if (expression.test(email) == true) {
// // Email is good
// return true}
//  else {
//  return false}
//   }

//   if (validateemail(email) == false || validatepassword(password) == false || validatename(name) == false){
//     return
//   }

//   function validatepassword(password) {
//     if (password > 6) {
//     return false}
//      else {return true
//      }
//       };

//       function validatefields(field){
//         if (field == null) {
//             return false
//         }
//         if (field.length <= 0){
//             return false
//         }
//         else {
//            return true
//         }
//       }
