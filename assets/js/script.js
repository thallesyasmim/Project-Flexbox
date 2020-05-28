const menuMobile = document.getElementsByClassName('menu_mobile')[0];

menuMobile.addEventListener('click', () => {
    let navUl = window.document.querySelector('nav ul');

    if(navUl.style.display === 'flex'){
        navUl.style.display = 'none';

    } else {
        navUl.style.display = 'flex';
    }
});

function innerEmoji(){
    const titleElement = document.querySelector('.logo a h1');
    titleElement.innerHTML = "thalles\u{1F49C}yasmim";
} 

innerEmoji();



