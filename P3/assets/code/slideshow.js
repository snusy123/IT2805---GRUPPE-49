const SHOW_TIME = 30000;
const FADE_TIME = 1300;

const PATH = 'assets/img/headers/';
const SLIDES = [
    'trevi.jpg',
    'interior.jpg'
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
            old = next;
            next = active;
            active = old;
        }, FADE_TIME)
    }
})();