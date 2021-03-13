'use strict';

class ModalWindow {
   constructor({
       overlay, 
       modal,
       closeBtn,
       openBtn,
       animation = {
            overlayOpen:'animate__fadeIn',
            overlayClose:'animate__fadeOut',
            typeOpen: 'animate__fadeIn',
            typeClose: 'animate__fadeOut'
        },
   }){
    this.overlay = document.querySelector(overlay),
    this.modal = document.querySelector(modal),
    this.closeBtn = document.querySelector(closeBtn),
    this.openBtn = document.querySelector(openBtn),
    this.animation = animation;
   };

   //----Подключаем анимацию-----
   linkedAnimate(){
       const link = document.createElement('link');
       link.setAttribute('rel', 'stylesheet');
       link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
       document.head.append(link);
   };

   modalEvent(){
       this.openBtn.addEventListener('click', this.openModal.bind(this));
       this.closeBtn.addEventListener('click', this.closeModal.bind(this));
       this.overlay.addEventListener('click', this.closeModal.bind(this));
   };

   //--------Открытие модального окна--------
   openModal(event){
       event.preventDefault();
       
       this.overlay.style.display = 'block'
       this.overlay.classList.remove(this.animation.overlayClose);
       this.overlay.classList.add('animate__animated', this.animation.overlayOpen);
       setTimeout(this.animateModal.bind(this), 1000);
   };

   animateModal(){
        this.modal.style.display = 'block';
        this.modal.classList.remove(this.animation.typeClose);
        this.modal.classList.add('animate__animated', this.animation.typeOpen);
   };

   //--------Закрытие модального окна-------
   closeModal(){
        setTimeout(this.closeOverlay.bind(this), 500);
       
       this.modal.classList.remove(this.animation.typeOpen);
       this.modal.classList.add(this.animation.typeClose);
       setTimeout(this.setMod.bind(this), 300);
   }

   closeOverlay(){
       this.overlay.classList.remove(this.animation.overlayOpen);
       this.overlay.classList.add(this.animation.overlayClose);
       setTimeout(this.setOver.bind(this), 300);
   }

   setOver(){
        this.overlay.style.display = 'none';
        this.clearStyle();
   }

   setMod(){
        this.modal.style.display = 'none';
   }

   //----чистим классы и стили после использования----
   clearStyle(){
       this.modal.classList.remove('animate__animated', this.animation.typeOpen, this.animation.typeClose);
       this.overlay.classList.remove('animate__animated', this.animation.overlayOpen, this.animation.overlayClose);
       this.modal.removeAttribute('style');
       this.overlay.removeAttribute('style');
   }

   init(){
       this.linkedAnimate();
       this.modalEvent();
   };
} 

export default ModalWindow;
