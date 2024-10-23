const slides = document.querySelectorAll('.test-drive-block img')
const dots = document.querySelectorAll('.test-drive-span-dots>span')

let activeSlide = 0


const reset = () => {
    slides.forEach(slide => slide.style.display = 'none')
    slides[activeSlide].style.display = 'block'

    dots.forEach(dot => dot.removeAttribute('class'))
    dots[activeSlide].className = 'active'
    }

reset()


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activeSlide = index

        reset()
    })
})



setInterval(() => {
    reset()

    if(activeSlide < slides.length -1) {
        activeSlide++
    } else {
        activeSlide = 0
    }
    
}, 3000)




// Кнопка поднятия вверх
// const btn = document.getElementById('go-top-btn')

// function scrollFunction() {
//     if(document.documentElement.scrollTop > 560) {
//         btn.style.display = 'block'
//     } else {
//         btn.style.display = 'none'
//     }
// }

// window.onscroll = function() {
//     scrollFunction()
// }

// const pushBtnTop = () => {
//     btn.addEventListener('click', () => {
//         document.documentElement.scrollTop = 0
//     })
// }

// pushBtnTop()



// ---------------------------------
// Кнопка поднятия вверх (ChatGPT)
//   Получаем кнопку
  const btnScroll = document.getElementById('go-top-btn');

  // Показать кнопку, если прокручено больше 540 пикселей
  window.onscroll = function() {
    if (window.scrollY > 540) {
      btnScroll.style.display = "block";
    } else {
      btnScroll.style.display = "none";
    }
  };

  // Плавный скролл вверх при нажатии на кнопку
  btnScroll.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавный скролл
    })
  })
//------------------------------------