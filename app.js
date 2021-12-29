const slides = document.querySelectorAll('.slide')

for (const slide of slides ) {
    slide.addEventListener('click', () => {
        clrarActiveClasses()
       
        slide.classList.add('active')

    })
}

function  clrarActiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

}