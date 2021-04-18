/// <reference types="Cypress"/>
var testData = require('../../../../LoginPizzaHutTestData.json');
console.log(testData);
describe("Testing Login with multiple data", () => {
   beforeEach(() => {
      cy.visit("https://www.pizzahut.ro/");
      cy.get('#CybotCookiebotDialogBodyLevelButtonAcceptWrapper').click();
      cy.get('.last > span').click();
      cy.get('#tab2 > .btn').click();
   });

   testData.badLogin.forEach((temp) => {
      it.only("Login with bad data " + temp.Email + " " + temp.Parola, () => {
         cy.get('#guest-settings').click();
         cy.get('#login_email').type(temp.Email)
         cy.get('#login_pass').type(temp.Parola);
         cy.get('[type="submit"]').click();
         cy.get('#err_email').should('have.text', 'Email sau parola gresite.');
      })
   });

   testData.goodLogin.forEach((temp) => {
      it("Login with good data " + temp.Email + " " + temp.Parola, () => {
         cy.get('#guest-settings').click();
         cy.get('#login_email').type(temp.Email)
         cy.get('#login_pass').type(temp.Parola);
         cy.get('[type="submit"]').click();
      })
   });

});