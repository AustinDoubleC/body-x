const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

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
