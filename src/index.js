import ModalWindow from './modules/modalWindow.js';
import Slider from './modules/slider.js';

const modal = {
    overlay:'.modal-overlay',
    modal:'.modal-callback',
    closeBtn:'.modal-close',
    openBtn:'.header .callback-btn',
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

