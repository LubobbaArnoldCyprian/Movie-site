describe('search content & check content detail page', ()=>{

/*
     it("test", function(){
        cy.fixture(example).then((x)=>{
            cy.wrap(x).then((fetchinfo)=>{

                cy.visit('url');


            })
        })
     }) */

    before(function(){
        cy.fixture('example.json').then(function(data){
            this.regdata=data
        })
    })

    it('Test case one', function(){
        cy.visit("https://www3.zoechip.com/")
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