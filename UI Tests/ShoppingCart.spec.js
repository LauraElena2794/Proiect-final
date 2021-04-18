/// <reference types="Cypress"/>

describe("Shopping Cart teste", () => {
    beforeEach(() => {
        cy.visit("https://www.pizzahut.ro/");
        cy.get('#CybotCookiebotDialogBodyLevelButtonAcceptWrapper').click();
        cy.get('.last > span').click();
        cy.get('#tab2 > .btn').click();
    });
    
    it("Add item", () => { 
     cy.get('#menu > .sf-menu > .sm_pizza > .ajax').click();
    //  cy.get('#product_24375_RHJC > .product_i > .product_price > .prod_bottom_bt > .otherFont').click();
    cy.wait(1000);
     cy.get('[data=24375] > .product_i > .product_price > .prod_bottom_bt > .otherFont').trigger('mouseover').click({force:true});
     cy.wait(1000);
     cy.get('[data=24375] > .product_i > .product_price > .prod_bottom_bt > .otherFont').trigger('mouseover').click({force:true});
     cy.wait(1000);
     cy.get('#verifyAddress_ic > h3').should('contain.text','Avem nevoie de câteva detalii');
     
     cy.get('.delivery').click();
     cy.get('#email').type('Lauraelena2794@yahoo.com')
     cy.get('#password').type('Tatamama2');   
     cy.wait(500);
     cy.get('#login-bt').click({force:true});
     cy.get('.address_bt > .button').trigger('mouseover').click();
     cy.wait(5000);
     












    });

});
