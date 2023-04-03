/// <reference types="cypress" />
describe('search content & check content detail page', ()=>{


    before(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)

        })
    })

    it('Test case one', function(){

            cy.get('#onesignal-slidedown-cancel-button').click()

            // let expName = 'Mr robot'
            let search = cy.get('#search > .search-content > form > .form-control')
            search.click()
            search.type('Mr Robot')
            cy.wait(3000)
    
            cy.get('#search > .search-content > .nav >')
                .eq(0)
                .click()
            cy.get('.heading-name > a')
                .should('be.visible')
                .should('have.text', 'Mr. Robot')   

    })

    

})