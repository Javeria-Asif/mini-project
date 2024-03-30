import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIGwnZ4x0mek-BVGUOGonrnEX18mGb4VY",
    authDomain: "practice-sumaim.firebaseapp.com",
    projectId: "practice-sumaim",
    storageBucket: "practice-sumaim.appspot.com",
    messagingSenderId: "300999668189",
    appId: "1:300999668189:web:3d8bf5c364d7261e408634"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

var auth = getAuth(app);
var db = getDatabase(app);

var signupForm = document.getElementById('signup-form')

function signup(e) {
  e.preventDefault();
  var firstname = document.getElementById('first-name').value;
  var password = document.getElementById('password-signup').value;
  var lastname = document.getElementById('last-name').value;
  var emailsignup = document.getElementById('email-signup').value;
  var passwordsignuprepeat = document.getElementById('password-signup-repeat').value;


  createUserWithEmailAndPassword(auth, emailsignup, password)
    .then((userCredential) => {
      // Signed up 
      var user = userCredential.user;
      var userId = user.uid
      console.log(user);
      // ...
      function writeUserData(userId, firstname, lastname, emailsignup){
        set(ref(db, 'users/' + userId), {
          firstname: firstname,
          lastname: lastname,
          email: emailsignup
        });
        sessionStorage.setItem('email', user.email);
      }
      writeUserData(userId, firstname, lastname, emailsignup);
      // window.location.href = '../index.html'
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(error);
      console.log(error.message);
    });




}

signupForm.addEventListener('submit', signup)


function showPassword(event) {
  event.target.className = "eye bi bi-eye-slash";
  event.target.previousElementSibling.type = "text";
  event.target.removeEventListener('click', showPassword);
  event.target.addEventListener('click', hidePassword);
}

// hide password
function hidePassword(event) {
  event.target.className = "eye bi bi-eye";
  event.target.previousElementSibling.type = "password";
  event.target.removeEventListener('click', hidePassword);
  event.target.addEventListener('click', showPassword);
}
