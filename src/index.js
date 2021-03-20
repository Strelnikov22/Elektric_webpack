import ModalWindow from './modules/modalWindow.js';
import Slider from './modules/slider.js';
import Scrolling from './modules/scrolling.js';
import Acardion from './modules/acardion.js';
import Form from './modules/formData.js';

const modal = {
    overlay:'.modal-overlay',
    modal:'.modal-callback',
    closeBtn:'.modal-close',
    openBtn:'.header .callback-btn, .fancyboxModal',
    animation:{
        overlayOpen:'animate__fadeIn',
        overlayClose:'animate__fadeOut',
        typeOpen:'animate__zoomIn',
        typeClose:'animate__zoomOut',
    }
};

const modalWin = new ModalWindow(modal);

modalWin.init();


const sliderTop = {
    itemContainer: '.top-slider',
    item: '.item',
    animation:{
        typeOpen:'animate__fadeIn',
        typeClose:'animate__fadeOut',
    }
};

const sliderAutoTop = new Slider(sliderTop);

sliderAutoTop.init();

// const mobileMod = {
//     openBtn: '.mob-menu-btn',
//     menu: '.'
// }

const modalMobile = {
    overlay:'.overlay',
    modal:'.mobile-menu',
    closeBtn:'.mobile-menu-close, .mobile-menu li a, .callback-btn',
    openBtn:'.mob-menu-btn',
    animation:{
        overlayOpen:'animate__fadeIn',
        overlayClose:'animate__fadeOut',
        typeOpen:'animate__slideInLeft',
        typeClose:'animate__slideOutLeft',
    }
};

const modalM = new ModalWindow(modalMobile);

modalM.init();


const scroll = {
    arrowTop: '.up',
    link: '.top-menu a',
};

const scrollLink = new Scrolling(scroll);

scrollLink.init();

const scrollMobile = {
    arrowTop: '.up',
    link: '.mobile-menu ul a',
};

const scrollMobileLink = new Scrolling(scrollMobile);

scrollMobileLink.init();

const acardionElem = {
    element: '.accordeon',
    elements: '.element',
    elemContent: '.element-content',
};

const acardioshka = new Acardion(acardionElem);

acardioshka.init();
 
const data = {
    name: '.form-name',
    tel: '.form-tel',
    form: '.form-modal',
    closeTrigger: modalWin,
    // overlay:'.overlay',
    // modal:'.mobile-menu',
    // animation:{
    //     overlayOpen:'animate__fadeIn',
    //     overlayClose:'animate__fadeOut',
    //     typeOpen:'animate__slideInLeft',
    //     typeClose:'animate__slideOutLeft',
    // }
};

const formSend = new Form(data);

formSend.init();