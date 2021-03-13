'use strict';

class Slider {
    constructor({
        itemContainer,
        item,
        animation = {
            typeOpen: 'animate__fadeIn',
            typeClose: 'animate__fadeOut'
        },
    }){
        this.itemContainer = document.querySelector(itemContainer),
        this.item = document.querySelectorAll(item),
        this.itemId = 0,
        this.itemLength = this.item.length,
        this.animation = animation;
    };

    //----Подключаем анимацию-----
    linkedAnimate(){
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
        document.head.append(link);
    };

    startSlide(time){
        let interval = setInterval(this.autoPlaySlide.bind(this), time);
    };

    autoPlaySlide(){
        this.prefSlide(this.item, this.itemId, 'active');
        this.itemId++;
        if(this.itemId >= this.itemLength){
            this.itemId = 0;
        };
        this.nextSlider(this.item, this.itemId, 'active');
    };

    prefSlide(elem, id, classActive){
        elem[id].classList.remove(this.animation.typeOpen);
        elem[id].classList.add('animate__animated', this.animation.typeClose);
        setTimeout(function(){
            elem[id].classList.remove(classActive)
        }, 500);
    };

    nextSlider(elem, id, classActive){
        elem[id].classList.remove(this.animation.typeClose);
        elem[id].classList.add('animate__animated', this.animation.typeOpen);
        setTimeout(function(){
            elem[id].classList.add(classActive)
        }, 500);
    };

    // style(){
    //     const createStyle = document.createElement('style');
    //     createStyle.textContent = `
    //         .item{
    //             display:none;
    //         };
    //         .active{
    //             display:block!important;
    //         };
    //         .active .table{
    //             opacity: 1!important;
    //             visibility: visible!important;
    //         }
    //     `
    //     document.head.append(createStyle);
    // }

    init(){
        this.startSlide(3500);
        // this.style();
    };
}

export default Slider;
