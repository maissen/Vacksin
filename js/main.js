document.getElementById('toggle_nav_links').onclick = function(){
    document.querySelector('.navbar__links').classList.toggle('active__liks_list');
}

window.onscroll = function(){
    if(window.scrollY > 0){
        document.getElementsByClassName('navbar')[0].classList.add('nav_links_scroll');
    }else{
        document.getElementsByClassName('navbar')[0].classList.remove('nav_links_scroll');
    }
}

var cards = document.querySelectorAll('.box');
for(let i = 0; i < cards.length; i++){
    cards[i].querySelector('button').onclick = function(){
        for(let j = 0; j < cards.length; j++){
            cards[j].classList.remove('active_box');
        }
        cards[i].classList.add('active_box');
    }
} 