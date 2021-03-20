'use strict';

class Acardion{
    constructor({
        element,
        elements,
        elemContent,
    }){
        this.elemAcardion = document.querySelector(element);
        this.elements = this.elemAcardion.querySelectorAll(elements);
        this.elemContent = document.querySelectorAll(elemContent);
        this.elementContentClass = elemContent;
    }

    elemEvent(){
        this.elemAcardion.addEventListener('click', this.elemAlone.bind(this))
    }

    elemAlone(event){
        let target = event.target;
        


        if(target.matches('.title')) {


            let targetParent = target.closest('.element');
            let elementContent = targetParent.querySelector(this.elementContentClass);


            if (targetParent.matches('.active')) {

                targetParent.classList.remove('active');
                elementContent.classList.remove('activeContent');
                
            } else {

                this.elemContentClose();
                this.elemTitleClose();

                targetParent.classList.add('active');
                elementContent.classList.add('activeContent');

            }
            
        }
    }


    elemContentClose(){
        this.elemContent.forEach((elem)=>{
            elem.classList.remove('activeContent');
        })
    }
    elemTitleClose(){
        this.elements.forEach((elem)=>{
            elem.classList.remove('active');
        })
    }

    init(){
        this.elemEvent();
    }
}

export default Acardion;