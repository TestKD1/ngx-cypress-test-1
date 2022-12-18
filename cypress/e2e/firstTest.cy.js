/// <reference types="cypress" />
//const { describe, it, beforeEach } = require("node:test");


describe('Our first suite', () =>{


        it('first test', () =>{

            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layout').click()
          
            // by Tag Name
            cy.get('input')

            // by Tag ID
            cy.get('#inputEmail')

            // by Calss name
            cy.get('.input-full-width')

            // by Attribute name
            cy.get('[placeholder]')

            // by Attribute name and value
            cy.get('[placeholder="Email"]')

            // by Class value
            cy.get('[class="input-full-width size-medium shape-rectangle"]')

            // by Tag name and Attribute with value
            cy.get('input[placeholder="Email"]')

            // by two different attributes
            cy.get('[placeholder="Email"][fullwidth]')

             // by tag name, Attribute with value, ID and Class name
             cy.get('input[placeholder="Email"]#inputEmail.input-full-width')

             // The most recommended way by Cypress
             cy.get('[data-cy="imputEmail1"]')

        

         })

         it.only('second test', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layout').click()

            cy.get('[data-cy="signInButton"]')

            cy.contains('Sign in')

            cy.contains('[status="warning"]','Sign in')


            cy.get('#inputEmail3')
                .parents('form')
                .find('button')
                .should('contain','Sign in')
                .parents('form')
                .find('nb-checkbox')
                .click()

            cy.contains('nb-card','Horizontal form')
                .find('[type="email"]')
         })




 
})
