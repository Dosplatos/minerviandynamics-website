window.onload = function () {
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    document.body.classList.add('safari');
}

    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    const mobileMenuLinks = document.querySelectorAll('.mobile-nav a');

    mobileMenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {

            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
        });
    });
};
