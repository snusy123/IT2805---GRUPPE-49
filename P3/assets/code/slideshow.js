// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

const SHOW_TIME = 30000;
const FADE_TIME = 1300;

const PATH = 'assets/img/';
const SLIDES = [
    'header-1.jpg',
    'header-2.jpg'
];

(function() {
    let index = -1;

    document.addEventListener('DOMReady', function() {
        active = document.getElementById('a-slide');
        next = document.getElementById('b-slide');

        setInterval(slide, SHOW_TIME + FADE_TIME);
        slide();
    })

    function nextIndex() {
        index = (index + 1) % SLIDES.length;
        return index;
    }

    function slide() {
        next.classList.remove('faded');
        next.style.backgroundImage = `url(${PATH + SLIDES[nextIndex()]})`;
        
        active.classList.add('faded');

        setTimeout(function() {
            console.log('switch');
            old = next;
            next = active;
            active = old;
        }, FADE_TIME)
    }
})();