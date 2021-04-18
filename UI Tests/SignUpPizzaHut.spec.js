/// <reference types="Cypress"/>
var testData = require('../../../../SignUpPizzaHutTestData.json');
console.log(testData);
describe("Testing SignUp with multiple data", () => {
   beforeEach(() => {
      cy.visit("https://www.pizzahut.ro/");
      cy.get('#CybotCookiebotDialogBodyLevelButtonAcceptWrapper').click();
      cy.get('.last > span').click();
      cy.get('#tab2 > .btn').click();
   });

   testData.baddata.forEach((temp) => {
      it("SignUp with bad data " + temp.Prenume + " " + temp.Nume + " " + temp.Email + " " + temp.Parola + " " + temp.Confirmareparolă + " " + temp.Telefon, () => {
         cy.get('#guest-settings').click();
         cy.get('#login-btn-register').click();
         cy.get(':nth-child(2) > .input-container > .input').type(temp.Nume);
         cy.get(':nth-child(3) > .input-container > .input').type(temp.Prenume);
         cy.get(':nth-child(4) > .input-container > .input').type(temp.Email);
         cy.get(':nth-child(5) > .input-container > .input').type(temp.Parolă);
         cy.get(':nth-child(6) > .input-container > .input').type(temp.Confirmareparolă);
         cy.get(':nth-child(7) > .input-container > .input').type(temp.Telefon);
         cy.get(':nth-child(10) > .input-container > .nopadding > tbody > tr > :nth-child(2)').click();
         cy.get(':nth-child(11) > .input-container > .nopadding > tbody > tr > :nth-child(2)').click();
         cy.get(':nth-child(12) > .input-container > .nopadding > tbody > tr > :nth-child(2) > label').click();
         cy.get(':nth-child(13) > .input-container > .nopadding > tbody > tr > :nth-child(2) > label').click();
         cy.get(':nth-child(14) > .input-container > .nopadding > tbody > tr > :nth-child(2) > label').click();
         cy.get('.button').click();
         cy.get('#err_registrationPassword > span').should('have.text', 'Parola trebuie să cuprindă între 6 şi 32 de caractere şi să conţină litere şi cifre');
         cy.get('#err_password_repeat > span').should('have.text', 'Parola introdusă este diferită faţă de cea iniţială');
         cy.get('#err_telefon').should('have.text', 'Telefonul nu este valid');





      });
   });
});
