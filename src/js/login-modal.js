//MODAL
const modalContainer = document.querySelector('.modal');
const openModalButton = document.getElementById('header__sign-up');
const backdrop = document.querySelector('.modal-overlay');
//INPUTS
const nameInput = document.querySelector('.name');
const sighnUpOpt = document.getElementById('sighn-up-opt');
const sighnInOpt = document.getElementById('sighn-in-opt');
const menu = document.querySelector('.header__menu');

const form = document.querySelector('.form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
const sihbUpSvg = document.querySelector('.header__svg-array');
const sihnInSvg = document.querySelector('.header__svg-array-down');
sihnInSvg.style.display = 'none';

const userImg = document.querySelector('.user-img');
userImg.style.display = 'none';
//EXPORTS
export { addbooktosl, removeBook };
export { checkCurentUser };
export { getAddedBooks };
//IMPORTS
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase, ref, set, child, update, remove, get, onValue } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Notiflix from 'notiflix';

function createModal() {
  backdrop.style.display = 'block';

  const closeButton = document.querySelector('.closeButton');

  closeButton.addEventListener('click', closeModal);
  document.body.classList.add('noscroll');
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
  backdrop.style.display = 'none';
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('noscroll');
  form.reset();
}

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

const firebaseConfig = {
  apiKey: 'AIzaSyBcrgHRI8n8PGmp66vE4dbqzvZDKE7S3nw',
  authDomain: 'book-list7.firebaseapp.com',
  projectId: 'book-list7',
  storageBucket: 'book-list7.appspot.com',
  messagingSenderId: '822015975293',
  appId: '1:822015975293:web:ba97db769cb5eb5d8bf614',
  databaseURL: 'https://book-list7-default-rtdb.europe-west1.firebasedatabase.app',
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAc6ZeZFNKDr2KsntnTRa9jOsvNY3-ClBY",
//   authDomain: "book-list-final.firebaseapp.com",
//   projectId: "book-list-final",
//   storageBucket: "book-list-final.appspot.com",
//   messagingSenderId: "57582328129",
//   appId: "1:57582328129:web:0ab4019b98f2dac7ace9c0",
//   databaseURL:'https://book-list-final-default-rtdb.europe-west1.firebasedatabase.app'
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const dbRef = ref(getDatabase());

const database = getDatabase(app);

function register() {
  const sighnUpEmail = email.value;
  const sighnUpName = name.value;
  const sighnUpPassword = password.value;

  createUserWithEmailAndPassword(auth, sighnUpEmail, sighnUpPassword, sighnUpName)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const userId = user.uid;
      globalUserId = userId;

      writeUserData(userId, sighnUpName, sighnUpEmail);

      Notiflix.Notify.success('You created a account:', `${sighnUpName}`);

      closeModal();
    })
    .catch(error => {
      Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
    });
}

function login() {
  const sighnUpEmail = email.value;
  const sighnUpPassword = password.value;
  signInWithEmailAndPassword(auth, sighnUpEmail, sighnUpPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      Notiflix.Notify.success('Welcome back!');
      closeModal();
      saveUserData();
      checkCurentUser();
    })
    .catch(error => {
      Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
    });
}

const userCard = document.querySelector('.user-info');

function checkCurentUser() {
  onAuthStateChanged(auth, user => {
    if (user) {
      // const userId = auth.currentUser.uid;

      checkname();
      checkId();
      getAddedBooks();

      menu.classList.add('flex');
      menu.classList.remove('noone');
      sihbUpSvg.style.display = 'none';
      sihnInSvg.style.display = 'block';
      userImg.style.display = 'block';

      openModalButton.removeEventListener('click', createModal);
      openModalButton.addEventListener('click', logOutBtn);
      sighnOutBtn.style.display = 'none';
    } else {
      // User is signed out
      openModalButton.removeEventListener('click', logOutBtn);
      openModalButton.addEventListener('click', createModal);
      menu.classList.add('noone');
      menu.classList.remove('flex');
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
      userCard.textContent = 'Sign up';

      Notiflix.Notify.info('Hope we see you soon!');
      closeModal();
      clearUserData();
    })
    .then(() => {
      sighnOutBtn.style.display = 'none';
    })
    .catch(error => {
      Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
    });
}

function writeUserData(userId, name, email) {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    //   profile_picture : svg
  });
  // alert('User saved');
}

function checkname() {
  const userId = auth.currentUser.uid;
  return onValue(ref(db, '/users/' + userId), snapshot => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';

    userCard.textContent = username;

    saveUserName(username);
  });
}

function checkId() {
  const userId = auth.currentUser.uid;
  return onValue(ref(db, '/users/' + userId), snapshot => {
    const url = (snapshot.val() && snapshot.val().url) || 'Anonymous';
    //  console.log(url)
    // console.log(userId);
    // addToLocalStorage(userId)
    saveUserEmail(userId);
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
      } else {
        // Книги нет в списке, добавляем ее
        update(userBooksRef, {
          [bookId]: bookId,
        })
          .then(() => {
            Notiflix.Notify.success('Book is added to your shopping list');
          })
          .catch(error => {
            Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
          });
      }
    })
    .catch(error => {
      Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
    });
}

function getAddedBooks() {
  const userId = auth.currentUser.uid;

  const db = getDatabase();
  const userRef = ref(db, 'users/' + userId + '/books');

  onValue(userRef, snapshot => {
    const books = snapshot.val();
    if (books) {
      const addedBooks = Object.values(books);
      // console.log('Массив добавленных книг:', addedBooks);
      saveUserBooks(addedBooks);
      return addedBooks;
    } else {
      const localStorageEL = JSON.parse(localStorage.getItem('userdata')) ?? {};
      console.log(localStorageEL.books);
      localStorageEL.books = [];
      localStorage.setItem('userdata', JSON.stringify(localStorageEL));
    }
  });
}

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
            Notiflix.Notify.info('Book is removed from your shopping list');
          })
          .catch(error => {
            Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
          });
      }
    })
    .catch(error => {
      Notiflix.Notify.failure(error.code.split('auth/')[1].toUpperCase().replace(/-/g, ' '));
    });
}

function saveUserName(name) {
  const userData = getUserData();
  if (userData) {
    userData.name = name;
    saveUserData(userData.name, userData.id, userData.books);
  } else {
    const userInfo = {
      name: name,
      id: '',
      books: [],
    };
    saveUserData(userInfo.name, userInfo.id, userInfo.books);
  }
}

function saveUserEmail(id) {
  const userData = getUserData();
  if (userData) {
    userData.id = id;
    saveUserData(userData.name, userData.id, userData.books);
  } else {
    const userInfo = {
      name: '',
      id: id,
      books: [],
    };
    saveUserData(userInfo.name, userInfo.id, userInfo.books);
  }
}

function saveUserBooks(books) {
  const userData = getUserData();
  if (userData) {
    userData.books = books;
    saveUserData(userData.name, userData.id, userData.books);
  } else {
    const userInfo = {
      name: '',
      id: '',
      books: Array.isArray(books) ? books : [],
    };
    saveUserData(userInfo.name, userInfo.id, userInfo.books);
  }
}

function getUserData() {
  const userDataString = localStorage.getItem('userdata');
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData;
  } else {
    return null;
  }
}

function saveUserData(name, id, books) {
  const userInfo = {
    name: name,
    id: id,
    books: books,
  };

  // Convert the user info object to a string
  const userInfoString = JSON.stringify(userInfo);

  // Save the string in local storage
  localStorage.setItem('userdata', userInfoString);
}
function clearUserData() {
  localStorage.removeItem('userdata');
}
