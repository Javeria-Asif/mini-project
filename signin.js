// firebaseFunctions.js
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIGwnZ4x0mek-BVGUOGonrnEX18mGb4VY",
    authDomain: "practice-sumaim.firebaseapp.com",
    projectId: "practice-sumaim",
    storageBucket: "practice-sumaim.appspot.com",
    messagingSenderId: "300999668189",
    appId: "1:300999668189:web:3d8bf5c364d7261e408634"
};

// firebaseFunctions.js

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

  var auth = getAuth(app);

  var signForm = document.getElementById("signin-form");

  function signIn(e) {
    e.preventDefault();
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // readUserData(user.uid);
        console.log("Signed in user: ", user)
        sessionStorage.setItem('email', user.email);
        window.location.href = '../dashbord.html';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: ", errorMessage)
      });
  }

  signForm.addEventListener("submit", signIn)
// show Password
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