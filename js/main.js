document.getElementById('toggle_nav_links').onclick = function(){
    document.querySelector('.navbar__links').classList.toggle('active__liks_list');
}

window.onscroll = function(){
    if(window.scrollY > 0){
        document.getElementsByClassName('navbar')[0].classList.add('nav_links_scroll');
    }else{
        document.getElementsByClassName('navbar')[0].classList.remove('nav_links_scroll');
    }

    var header_badge = document.querySelectorAll('header .badge');
    header_badge[0].style.transform = 'translateY(' + window.scrollY/3 + 'px)';
    header_badge[1].style.transform = 'translateY(' + -window.scrollY-500 + 'px)';
    header_badge[2].style.transform = 'translateY(' - window.scrollY/1.4 + 'px)';
}