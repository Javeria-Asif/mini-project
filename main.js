
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

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

var Signout = document.getElementById('logout')

function Logout() {
    signOut(auth).then(() => {
        window.location.href = './signin.html';
    }).catch((error) => {
        console.log(error)
    });
}


Signout.addEventListener('click', Logout)

let blogTitle = document.getElementById('title');
let blogPost = document.getElementById('post');
let Blog_Form = document.getElementById('blogForm')


function createPost(e) {
    e.preventDefault()
    try {
        let RandomId = Math.floor(Math.random() * 1000000000)
        function writeUserData(blogTitle, blogPost) {
            set(ref(db, 'blogs/' + RandomId), {
                BlogTitle: blogTitle.value,
                BlogPost: blogPost.value,
            });
            Swal.fire({
                icon: "success",
                title: "Congratulations",
                text: "Your Blog Pulished Successfully",
            });
        }
        writeUserData(blogTitle, blogPost)
    } catch (error) {
        console.log(error)
    }

}

Blog_Form.addEventListener('submit', createPost)


// let BlogResult = document.getElementById('blogresult');

// const starCountRef = ref(db, 'blogs/');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data)
//     Object.values(data).map((data) => {
//         console.log(data);
//         const html = `
//     <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Title: ${data.BlogTitle}</h5>
//     <p class="card-text">Description: ${data.BlogPost}</p>
//   </div>`
//         BlogResult.innerHTML += html

//     })
// });