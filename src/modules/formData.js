'use strict';

class Form{
    constructor({
        name,
        tel,
        form,
        closeTrigger,
    }){
        this.name = document.querySelector(name);
        this.tel = document.querySelector(tel);
        this.form = document.querySelector(form);
        this.closeM = closeTrigger;


        this.errorSms = 'Sorry, but we have a problem :(';
        this.loadSms = 'Loading...';
        this.successSms = 'Thank you, we will contact you shortly :)';
        this.statusSms = document.createElement('div');
    }

    //----Обработка-формы-----
    formEvent(){
        this.form.addEventListener('submit', this.pushData.bind(this));
    }

    pushData(event){
        event.preventDefault();
        this.statusSms.textContent = this.loadSms;
        this.form.appendChild(this.statusSms);
        this.post(); 
    }

    clearFormField() {
        this.name.value ='';
        this.tel.value = '';
        this.statusSms.textContent = '';
    }

    post(){
        let formData = {
            name: this.name.value,
            tel: this.tel.value
        }
        this.postData(formData)
            .then(this.successMessage.bind(this))
            .then(this.closeWind.bind(this))
            .catch(this.errorMessage.bind(this));
    }

    successMessage(response){
        if(response.status !== 200){
            throw new Error('Cервер не дает ответа');
        }
        this.statusSms.textContent = this.successSms;
     
        this.clearFormField();
    }

    closeWind() {
        let c = setInterval(this.closeM.closeModal(), 2500);
        return c;
    }

    errorMessage(error){
        this.statusSms.textContent = this.errorSms;
        console.error(error);
       
        this.clearFormField();
    }

    postData(body){

        return fetch('./server.php', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(body)
        });
    }


    init(){
        this.formEvent();
    }
}

export default Form;