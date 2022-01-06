/* mobile menu */
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const imgLeader = document.querySelector('leader-img');

let menuOpen = () => {
    if (!menuOpen) {
        btnMenu.src = images/icon-close.svg;
        btnMenu.style.width = '1.25rem';
        menu.style.display = 'block';
        imgLeader.style.display = 'none';
        document.body.style.overflow = 'hidden';
        menuOpen = true;
    } else {
        btnMenu.src = 'images/icon-hamburger.svg';
        btnMenu.style.width = '1.55rem';
        menu.style.display = 'none';
        imgLeader.style.display = 'block';
        document.body.style.overflow = 'visible';
        menuOpen = false;
        //"window.location.reload()"
        window.location.href = window.location.href
    }
};

btnMenu.addEventListener('click', openMenu);
