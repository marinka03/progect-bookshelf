const modalContainer = document.querySelector('.modal');
const openModalButton = document.querySelector('.header__sign-up');
const backdrop = document.querySelector('.modal-overlay');

const nameInput = document.querySelector('.name');
const sighnUpOpt = document.getElementById('sighn-up-opt');
const sighnInOpt = document.getElementById('sighn-in-opt');
const menu = document.querySelector('.header__menu');

// import {buttonModalRemoveBook} from './create-modal'

const form = document.querySelector('.form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
const sihbUpSvg = document.querySelector('.header__svg-array');
const sihnInSvg = document.querySelector('.header__svg-array-down');
sihnInSvg.style.display = 'none';

const userImg = document.querySelector('.user-img');
userImg.style.display = 'none';

const sighnUpEmail = email.value;
const sighnUpName = name.value;
const sighnUpPassword = password.value;

export { addbooktosl };
export { checkCurentUser };
export { getAddedBooks };

console.log(modalContainer);

function createModal() {
  backdrop.style.display = 'block';

  const closeButton = document.querySelector('.closeButton');

  const close = closeButton.addEventListener('click', closeModal);

  modalContainer.appendChild(closeButton);

  modalContainer.style.display = 'block';
  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modalContainer.style.display = 'none';
  // modalContainer.innerHTML = "";
  backdrop.style.display = 'none';
  window.removeEventListener('keydown', onEscKeyPress);
  form.reset();
}

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import 'firebase/auth';

import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
  get,
  onValue
} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const sighnUpBtn = document.getElementById('sighn-up');
const sighnInBtn = document.getElementById('sighn-in');
const sighnOutBtn = document.getElementById('sighn-out');
sighnUpBtn.addEventListener('click', register);
sighnInBtn.addEventListener('click', login);
sighnOutBtn.addEventListener('click', signOutUser);
sighnOutBtn.style.display = 'none';

sighnUpOpt.disabled = true;
sighnInBtn.style.display = 'none';

sighnUpOpt.addEventListener('click', signupmodal);
sighnInOpt.addEventListener('click', signinmodal);

function signupmodal() {
  sighnUpOpt.disabled = true;
  sighnInOpt.disabled = false;
  nameInput.style.display = 'block';
  sighnInBtn.style.display = 'none';
  sighnUpBtn.style.display = 'block';
}

function signinmodal() {
  sighnUpOpt.disabled = false;
  sighnInOpt.disabled = true;
  nameInput.style.display = 'none';
  sighnInBtn.style.display = 'block';
  sighnUpBtn.style.display = 'none';
}

// const firebaseConfig = {
//   apiKey: "AIzaSyC6_3JGFTbHH7w50Kv4NMidw8vHUEsiuKI",
//   authDomain: "book-list-2a4ef.firebaseapp.com",
//   projectId: "book-list-2a4ef",
//   storageBucket: "book-list-2a4ef.appspot.com",
//   messagingSenderId: "150834791024",
//   appId: "1:150834791024:web:ed6d52dbf29190ef7d6ab5",
//   measurementId: "G-WET36RWZYC"
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBcrgHRI8n8PGmp66vE4dbqzvZDKE7S3nw',
  authDomain: 'book-list7.firebaseapp.com',
  projectId: 'book-list7',
  storageBucket: 'book-list7.appspot.com',
  messagingSenderId: '822015975293',
  appId: '1:822015975293:web:ba97db769cb5eb5d8bf614',
  databaseURL:
    'https://book-list7-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();
const dbRef = ref(getDatabase());
// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// const auth = firebase.auth(app);
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const database = getDatabase(app);
// const database = getDatabase(app);

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
let globalUserId;

function register() {
  const sighnUpEmail = email.value;
  const sighnUpName = name.value;
  const sighnUpPassword = password.value;

  createUserWithEmailAndPassword(
    auth,
    sighnUpEmail,
    sighnUpPassword,
    sighnUpName
  )
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const userId = user.uid;
      globalUserId = userId;

      // const userImg = randomImg();

      writeUserData(userId, sighnUpName, sighnUpEmail);
    //   const userinfo = {
    //     name: sighnUpName,
    //     email: sighnUpEmail,
    //   }
      
      //  dbRef.child('users/' + userId).set(users_data)

      alert('Учетная запись успешно создана:', sighnUpName);
      closeModal();
      // const database_ref = database.ref()

      // const user_data = {
      //     email: email,
      //     name: name,
      //     last_login: Date.now(),
      // }
      // ...
      //     database_ref.child('users/' + user.uid).set(user_data)
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(errorMessage)
      console.log(errorMessage + errorCode);
    });
}

function login() {
  const sighnUpEmail = email.value;
  // const sighnUpName = name.value;
  const sighnUpPassword = password.value;
  signInWithEmailAndPassword(auth, sighnUpEmail, sighnUpPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // checkId()
      // checkname()
      alert('С возвращением!');
      closeModal();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert(errorMessage)
      console.log(errorMessage + errorCode);
    });
}

const userCard = document.querySelector('.user-info');
//   console.log(userCard)
function checkCurentUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      checkname();
      checkId();
      getAddedBooks();

      const userinfo = {
        name: sighnUpName,
        email: sighnUpEmail,
        
      }


      addToLocalStorage('user', userinfo);


      menu.style.display = 'flex';
      sihbUpSvg.style.display = 'none';
      sihnInSvg.style.display = 'block';
      userImg.style.display = 'block';

      openModalButton.removeEventListener('click', createModal);
      openModalButton.addEventListener('click', logOutBtn);
      sighnOutBtn.style.display = 'none';

      // ...
    } else {
      // User is signed out
      openModalButton.addEventListener('click', createModal);
      menu.style.display = 'none';
      sihbUpSvg.style.display = 'block';
      sihnInSvg.style.display = 'none';
      userImg.style.display = 'none';
    }
  });
}
checkCurentUser();

let buttonClicked = false;

function logOutBtn() {
  if (buttonClicked) {
    sighnOutBtn.style.display = 'none';
    buttonClicked = false;
  } else {
    sighnOutBtn.style.display = 'flex';
    buttonClicked = true;
  }
}

function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      userCard.textContent = 'Sighn up';
      alert('bye');
      closeModal();
    })
    .then(() => {
      sighnOutBtn.style.display = 'none';
    })
    .catch(error => {
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

// const userId = auth.currentUser.uid;

function writeUserData(userId, name, email) {
  // const userId = user.uid;
  // const sighnUpEmail = email.value;
  // const sighnUpName = name.value;
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    //   profile_picture : svg
  });
  alert('User saved');
}

// function checkData(globalUserId){
//     get(child(dbRef, `users/${globalUserId}`)).then((snapshot) => {
//         if (snapshot.exists()) {
//           console.log(snapshot.val());
//         } else {
//           console.log("No data available");
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
// }

function checkname() {
  const userId = auth.currentUser.uid;
  return onValue(ref(db, '/users/' + userId), snapshot => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';

    // ...
    userCard.textContent = username;
    console.log(username);
    //   return username;
  });
}

function checkId() {
  const userId = auth.currentUser.uid;
  return onValue(ref(db, '/users/' + userId), snapshot => {
    const url = (snapshot.val() && snapshot.val().url) || 'Anonymous';
    //   userCard.innerHTML = url;
    // ...
    //  console.log(url)
    console.log(userId);
  });
}

function addbooktosl(bookId) {
  const userId = auth.currentUser.uid;

  const db = getDatabase();
  const userBooksRef = ref(db, 'users/' + userId + '/books');

  const bookRef = child(userBooksRef, bookId);
  get(bookRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        // Книга уже существует в списке
        alert('Книга уже добавлена в список');
      } else {
        // Книги нет в списке, добавляем ее
        update(userBooksRef, {
          [bookId]: bookId,
        })
          .then(() => {
            alert('Книга успешно добавлена в список');
          })
          .catch(error => {
            console.error('Ошибка при добавлении книги в список:', error);
          });
      }
    })
    .catch(error => {
      console.error('Ошибка при проверке наличия книги в списке:', error);
    });
}

document.body.addEventListener('click', function (event) {
  console.log('curent');
    if (event.target.classList.contains('modal__btn-add')) {
    // выполнить функцию для элемента с классом 'modal__btn-add'
    bookId = event.target.getAttribute('data-bookId');
    console.log('bookId :>> ', bookId);
    addbooktosl(bookId);
  }
  if (event.target.classList.contains('modalbtn-remove')) {
    // выполнить функцию для элемента с классом 'modal__btn-add'
    bookId = event.target.getAttribute('data-bookId');
    // removeee();
  //   addbooktosl(bookId);
  removeBook(bookId);
  }
});

const bookList = JSON.parse(localStorage.getItem('shopping-list')) ?? [];
function getAddedBooks() {
  const userId = auth.currentUser.uid;

  const db = getDatabase();
  const userRef = ref(db, 'users/' + userId + '/books');

  onValue(userRef, snapshot => {
    const books = snapshot.val();
    if (books) {
      const addedBooks = Object.values(books);
      console.log('Массив добавленных книг:', addedBooks);
      addedBooks.map(item => {
        console.log(item);
        apiFetchCate(item).then(data => {
          const inShoppingList = bookList.some(number => item === number._id);
          if (inShoppingList) {
            return;
          }
          bookList.push(data);
          localStorage.setItem('shopping-list', JSON.stringify(bookList));
          console.log(bookList);
        });
      });
      return addedBooks;
    } else {
      console.log('no books found');
    }
  });
}

export { bookList };

function apiFetchCate(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(resp =>
    resp.json()
  );
}
// function removeBook(bookId) {
//   const userId = auth.currentUser.uid;
//   //   const userId = globalUserId;

//   const db = getDatabase();
//   const bookRef = ref(db, 'users/' + userId + '/books' + bookId);

//   remove(bookRef)
//     .then(() => {
//       alert('book deleted');
//     })
//     .catch(error => {
//       console.error('some problem...', error);
//     });
// }

function removeBook(bookId) {
    const userId = auth.currentUser.uid;
  
    const db = getDatabase();
    const userBooksRef = ref(db, 'users/' + userId + '/books');
    const bookRef = child(userBooksRef, bookId);
  
    get(bookRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          // Книга существует в списке, удаляем ее
          remove(bookRef)
            .then(() => {
              alert('Книга успешно удалена из списка');
            })
            .catch(error => {
              console.error('Ошибка при удалении книги из списка:', error);
            });
        } else {
          // Книги нет в списке
          alert('Книги нет в списке');
        }
      })
      .catch(error => {
        console.error('Ошибка при проверке наличия книги в списке:', error);
      });
  }

  function addToLocalStorage(key, value) {
    const existingData = localStorage.getItem(key);
    let data = [];
    
    if (existingData) {
      data = JSON.parse(existingData);
    }
    
    data.push(value);
    
    localStorage.setItem(key, JSON.stringify(data));
  }

//   removeBook(643282b1e85766588626a0dc);

// const includeBook = document.querySelector(".checking");
//     //   console.log(includeBook);
//       includeBook.addEventListener("click",  removeBook("643282b1e85766588626a0dc", globalUserId));
