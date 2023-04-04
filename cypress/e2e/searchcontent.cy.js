/// <reference types="cypress" />

import Search from "../PageObjects/searchContent"
describe('search content & check content detail page', ()=>{


    before(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)

        })
    })

    it('Test case one', function(){

        cy.fixture('example').then((data) =>{
            const sr=new Search()
            sr.clickNotification()
            sr.searchFunction(data.searchFilm)
            sr.selectDropdown()
            sr.verifySearch(data.expectedFilm)

        })

    })
})