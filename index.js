const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const comentario = document.querySelector('.comentario');

 openMenu.addEventListener('click', show);
 closeMenu.addEventListener('click', close);
 menu.addEventListener('click', close)

 function show() {
    menu.style.display = 'flex';
    menu.style.top = '0';
    comentario.style.display = 'none';
 }

 function close () {
/*     menu.style.display = 'block';
 */    menu.style.top = '-1000px';
        comentario.style.display = 'block';
 }
