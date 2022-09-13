import HomePage from '../pages/home-page'
import allureReporter from '@wdio/allure-reporter';
describe('SiGREEN Home page tests', () => {
  
    it('Visit the SiGREEN page and verify the title', async () => {
        allureReporter.addFeature("Assert Title");
        allureReporter.addSeverity('minor');
        //await browser.url("https://new.siemens.com/global/en/company/topic-areas/product-carbon-footprint.html");
        await HomePage.openBaseUrl();
        await expect(browser).toHaveTitle("Product Carbon Footprint | Topic Areas | Siemens Global");
        
    });
    
    it('Verify correct Header text is present on home page', async() => {
        
        const actualText = await HomePage.headerText;
        await expect(actualText).toHaveText('Decarbonization starts with data');

    });

    it('Verify Siemens LOGO is present on home page', async() => {
        
        
       //const imgLogo =  await HomePage.imageLogo;  
       //await expect(imgLogo).toBeDisplayed();
       await expect(await HomePage.imageLogo).toBeDisplayed();

    });
});