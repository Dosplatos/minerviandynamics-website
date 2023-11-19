window.onload = function () {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        document.body.classList.add('safari');
    }

    window.addEventListener('scroll', function () {
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

    // New functionality for toggling child divs based on parent div clicks
    document.getElementById('select1').classList.add('is-active'); // Initialize 'Select 1' as active

    document.querySelectorAll('.select-div').forEach(selectDiv => {
        selectDiv.addEventListener('click', function() {
            // Remove active class and hide all children
            document.querySelectorAll('.select-div').forEach(div => div.classList.remove('is-active'));
            document.querySelectorAll('.child-div').forEach(div => {
                div.style.display = 'none';
                div.setAttribute('aria-hidden', 'true');
            });
    
            // Add active class to clicked div and show corresponding child
            this.classList.add('is-active');
            const childId = 'child' + this.id.replace('select', '');
            document.getElementById(childId).style.display = 'block';
            document.getElementById(childId).setAttribute('aria-hidden', 'false');
        });
    });
};
