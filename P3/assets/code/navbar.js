// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp


(function(public) {
    document.addEventListener('DOMReady', function() {
        toggle = document.getElementById('gn-menustate')
        navbar = document.getElementById('navbar')
        offset = navbar.offsetTop

        console.log(offset)
    })
    
    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset >= offset) {
            this.navbar.classList.add("sticky")
        } else {
            this.navbar.classList.remove("sticky")
        }
    })
    
    public.navbarToggle = function() {
        toggle.checked = !toggle.checked
    }

    public.navigateTo = function(id) {
        const element = document.getElementById(id)
        const target = element.getBoundingClientRect().top + window.pageYOffset - 44
        
        window.scrollTo({
            top: target,
            behavior: "smooth"
        });
    }
})(this);