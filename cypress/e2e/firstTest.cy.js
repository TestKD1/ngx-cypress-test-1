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

         it('second test', () => {
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

        it('then and wrap methods', () =>{
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layout').click()
            /*
            cy.contains('nb-card','Using the Grid')
            .find('[for="inputEmail1"]')
            .should('contain','Email')

             cy.contains('nb-card','Using the Grid')
            .find('[for="inputPassword2"]')
            .should('contain','Password')


            cy.contains('nb-card','Basic form')
            .find('[for="exampleInputEmail1"]')
            .should('contain','Email')

            cy.contains('nb-card','Basic form')
            .find('[for="exampleInputPassword1"]')
            .should('contain','Password')

                */
            //JQuery method
            cy.contains('nb-card','Using the Grid').then(firstForm =>{  // rozszerzenie: function SmeName(firstForm)
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then (secondForm => {
                const  emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                const  passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(emailLabelSecond).to.equal('Email address')
                expect(passwordLabelSecond).to.equal('Password')

                //if you whant to convert your code back to the cypress format from JQuery you have to use wrap

                cy. wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password')



            })
        })


    })
    it('invoke command', () =>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card','Basic form')
                .find('nb-checkbox')
                .click()
                .find('.custom-checkbox')
                .invoke('attr', 'class')
                .should('contain', 'checked')


    }) 
    
    it.only('assert property', () =>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then(input =>{
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop','value').should('contain','Dec 17, 2022')
        })

    })

 
})
