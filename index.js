
//import Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCf7V9yh1ldttFwXbgTbrb_PqGP4eT2PAc",
  authDomain: "fb-login-ac.firebaseapp.com",
  projectId: "fb-login-ac",
  storageBucket: "fb-login-ac.appspot.com",
  messagingSenderId: "441044041212",
  appId: "1:441044041212:web:3945be8eb0afb566448679"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

const btnLogin = document.getElementById("btn-login")
const errorMsg = document.getElementById("error-message")

btnLogin.addEventListener("click",()=>{
  login()
})

function login () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  if (validate_password(password) == false) {
    errorMsg.innerText = "please enter password with 6 digits or more"
    return
  }
  if (validate_email(email) == false) {
    errorMsg.innerText = "invalid email"
    return
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    const user = auth.currentUser
    const database_ref = database.ref()
    database_ref.child('users/' + user.uid)
    sessionStorage.setItem("username",user.uid)
    window.location = "./portal";
    
  })
  .catch(function(error) {
    if (error.code === "auth/wrong-password"){
      errorMsg.innerText="incorrect password"
    }else if(error.code === "auth/user-not-found"){
      errorMsg.innerText="no registered user with this email address"
    }else{
      errorMsg.innerText=error.message
    }}
  )
  
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    return false
  }
}

function validate_password(password) {
  if (password.length < 6) {
    return false
  } else {
    return true
  }
}

function register(){
  window.location = "./register/"
}

//hamburger
const btnMenu = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btnMenu.addEventListener('click', navToggle)

function navToggle() {
  btnMenu.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

//slider carousel
let slider = tns({
  container:".my-slider",
  "slideBy":"1",
  "speed":200,
  autoplay:true,
  controls:false,
  autoplayButtonOutput:false,
  responsive:{
    1280:{
      items:4,
      gutter:20
    },
    1024:{
      items:3,
      gutter:20
    },
    768:{
      items:2,
      gutter:20
    },
    480:{
      items:1
    }
  }
})


//Chat
const btnChatOpen = document.getElementById("chatOpen")
const chatbox = document.getElementById("chatbox")
const btnChatClose = document.getElementById("chatClose")
const btnSendChat = document.getElementById("btnSendChat")
const chatInput = document.getElementById("chatInput")


//Chatbox control
btnChatClose.addEventListener("click",()=>{
  chatbox.style.transform = "translateX(600px)"
  chatbox.style.opacity = 0
})
btnChatOpen.addEventListener("click",()=>{
  chatbox.style.transform = "translateX(-600px)"
  chatbox.style.opacity = 1
})
btnSendChat.addEventListener("click",()=>{
  chatInput.value = ""
})
