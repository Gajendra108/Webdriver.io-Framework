class automateForm {

    async openFormPage(){
        await browser.maximizeWindow();
        await browser.url('https://practice.automationbro.com/contact/');
    }

    get textFieldFirstName(){
        return $('#evf-277-field_ys0GeZISRs-1');
    }

    get textFieldUserEmail(){
        return $('#evf-277-field_LbH5NxasXM-2');
    }

    get textFieldUserMobileNumber(){
        return $('#evf-277-field_66FR384cge-3');
    }

    get textFieldMessage(){
        return $("#evf-277-field_yhGx3FOwr2-4");
    }

    get BtnSubmit(){
        return $("//button[@type='submit']");
    }

    async fillInTheForm(name,email,number,para){

        await this.textFieldFirstName.setValue(name);
        await this.textFieldUserEmail.setValue(email);
        await this.textFieldUserMobileNumber.setValue(number);
        await this.textFieldMessage.setValue(para);

    }

     get successMsgFormSubmittion(){
        return $("//div[contains(text(),'Thanks for contacting us! We will be in touch with you shortly')]");
     }
}

export default new automateForm();