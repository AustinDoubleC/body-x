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
  "nav":false,
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