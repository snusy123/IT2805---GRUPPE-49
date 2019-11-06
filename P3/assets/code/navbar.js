// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

(function(public) {
    document.addEventListener('DOMReady', function() {
        toggle = document.getElementById('gn-menustate')
        header = document.getElementById('gn-header')
        navbar = document.getElementById('navbar')
        
        updateStickyOffset()
    })
    
    window.addEventListener('resize', () => updateStickyOffset())
    window.addEventListener('scroll', () => updateStickyPosition())

//private:
    function updateStickyOffset() {
        this.navbar.classList.remove('sticky')
        offset = navbar.offsetTop

        updateStickyPosition()
    }

    function updateStickyPosition() {
        if (window.pageYOffset >= offset) {
            console.log('added sticky')
            this.navbar.classList.add("sticky")
            return true
        } else {
            console.log('removed sticky')
            this.navbar.classList.remove("sticky")
            return false
        }
    }
    
//public:
    public.navbarToggle = function() {
        toggle.checked = !toggle.checked
    }

    public.navigateTo = function(id) {
        const element = document.getElementById(id)
        const target = element.getBoundingClientRect().top + window.pageYOffset - 44

        public.navbarToggle()
        
        window.scrollTo({
            top: target,
            behavior: "smooth"
        });
    }
})(this);