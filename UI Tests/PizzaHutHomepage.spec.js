/// <reference types="Cypress"/>

describe("Pizza Hut teste", () => {
    beforeEach(() => {
        cy.visit("https://www.pizzahut.ro/");
        cy.get('#CybotCookiebotDialogBodyLevelButtonAcceptWrapper').click();
        cy.get('.last > span').click();
        cy.get('#tab2 > .btn').click();
    });

    it("Product menu categories visible", () => {
        cy.get('#menu > .sf-menu',).should('be.visible');             //Categories button are visible
        cy.get('#menu > .right-menu >').should('be.visible');
    })

    it("Logo button visible and functional", () => {
        cy.get('#menu > .sf-menu > .sm_pizza > .ajax').click();
        cy.get('#header_logo').click();                              //Logo button is functional, user is redirected to Homepage.
        cy.get('#header_logo > img').should('be.visible');          //Logo button is visible
    })

    it("My account button visible and functional", () => {

        cy.get('#guest-settings').should('be.visible');             //My account button is visible
    })

    it("Shopping cart button visible an functional", () => {
        cy.get('#cart_icon').click();                              //Shopping cart button is functional, user is redirected to Shopping cart page  
        cy.get('#cart_icon').should('be.visible');                 //Shopping cart button is visible
    })

    it("Subscribe to Newsletter with valid Data", () => {
        cy.get('h6');
        cy.get('#nw_name').type('Laura');
        cy.get('#nw_email').type('Lauraelena2694@yahoo.com');
        cy.get('[value="1"]').click();
        cy.wait(1000);
        cy.get('#nw_subscribe_bt').click();
        cy.get('.alert-view').should('have.text', 'Te-ai abonat cu succes!')    //Test failed, sometimes user is not able to subscribe to Newsletter
    });

    it("Subscribe to Newsletter with already exists data", () => {
        cy.get('h6');
        cy.get('#nw_name').type('Laura');
        cy.get('#nw_email').type('Lauraelena2794@yahoo.com');
        cy.get('[value="1"]').click();
        cy.get('#nw_subscribe_bt').click();
        cy.get('.alert-view').should('have.text', 'Adresa de Email este deja inregistrata');  //Test failed, user receives a message:"Te-ai abonat cu succes"
    });
});