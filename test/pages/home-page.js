class HomePage {

    async openBaseUrl(){
        await browser.maximizeWindow();
        return browser.url('');
    }
     
    get headerText(){
        return $("//h1[contains(text(),'Decarbonization starts with data')]");
    }

    get imageLogo(){
        return $('.header__logo__company img');
    }
}

export default new HomePage();