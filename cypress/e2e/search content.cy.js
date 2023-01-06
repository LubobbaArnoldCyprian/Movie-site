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
        cy.visit("https://google.com")
        cy.fixture("example").then((word)=>{
            let input = cy.get("input[title='Search']")
            input.type(word.search).type('{enter}')
            // cy.type('{enter}')
            

        })
        // cy.get("input[title='Search']").type("search")
        // cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay')
        // cy.get('a').contains('Home').click()
        // cy.get("input[placeholder='Enter keywords...']").type('gggggggggggggfdffffff')
        // cy.get(".form-control search-input").type('abcd')


    })

    

})