// const cypress = require("cypress");
// const { describe } = require("mocha");

// const cypress = require("cypress")
// const { before } = require("cypress/types/lodash")

// const { it } = require("mocha")

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
        cy.get('#search > .search-content > .nav > .nav-bottom').click()
        let filmName = cy.get(':nth-child(1) > .film-detail > .film-name > a')
            filmName.click()
        let confirmFilmName = cy.get('.heading-name > a')
            confirmFilmName.should('be.visible')
            confirmFilmName.should('have.text', 'Mr. Robot')




        

        // cy.get('#search > .search-content > .nav >').each(($el, index, $list) =>{
        //     if($el.text()=='Mr Robot')
        //     {
        //         cy.wrap($el).click()
        //     }
        // })
        
        // cy.get('#search > .search-content > .nav >').contains('Mr Robot').click()
        // let expName = 'Mr Robot'
        // cy.get
        

            


        // cy.fixture("example").then((word)=>{
        //     let input = cy.get("input[title='Search']")
        //     input.type(word.search).type('{enter}')
        //     // cy.type('{enter}')
            

        // })


    })

    

})