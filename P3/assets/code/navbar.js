function navbarToggle() {
    const toggle = document.getElementById('gn-menustate')
    toggle.checked = !toggle.checked
}

function navigateTo(id) {
    const offset = -44
    const element = document.getElementById(id)
    const target = element.getBoundingClientRect().top + window.pageYOffset + offset
    

    window.scrollTo({
        top: target,
        behavior: "smooth"
    });
}