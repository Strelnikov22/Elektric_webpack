'use strict';

class Scrolling{
    constructor({
        arrowTop,
        link,
    }){
        this.up = document.querySelector(arrowTop);
        this.link = document.querySelectorAll(link);
    }

    //----убираем стрелку навигации когда мы вверху----
    upEvent(){
        this.up.addEventListener('click', this.scrollUp.bind(this));
        window.addEventListener('scroll', this.scrollHidden.bind(this));
    }

    scrollUp(){
        let top = document.querySelector('#top');
        console.log(top)
                top.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
    }

    scrollHidden(){
        this.up.hidden = (pageYOffset < document.documentElement.clientHeight);
    }

    //-----работаем с ссылками меню-----

    linkAlone(){
        this.link.forEach(this.elementEvent.bind(this))
    }

    elementEvent(elem){
        if(elem){
            elem.addEventListener('click', function(event){
                event.preventDefault();
                let href = elem.getAttribute('href');
                let section = document.querySelector(href);
                section.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            });
        }
    }

   
    
    init(){
        this.linkAlone();
        this.upEvent();
    }
}

export default Scrolling;
