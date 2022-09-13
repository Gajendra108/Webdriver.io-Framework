import AutomationForm from '../pages/automateForm-page';
import * as faker from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter';

describe('Fill the form with random data', () => {
   
    it('Submit the form with random data', async () => {
        allureReporter.addFeature("Data form filling");
        allureReporter.addSeverity("critical")
        await AutomationForm.openFormPage();
        await AutomationForm.fillInTheForm(faker.faker.name.fullName(),faker.faker.internet.email(),faker.faker.phone.phoneNumber(),faker.faker.lorem.paragraphs(2) );
        await AutomationForm.BtnSubmit.click();

        await expect(await AutomationForm.successMsgFormSubmittion).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});