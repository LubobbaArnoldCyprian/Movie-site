// import Search from "../PageObjects/player"

import { searchMovie } from "../pageObjects/player"

describe('search content & check content detail page', ()=>{


    beforeEach(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)

        })
    })


    it.only('player', function(){

        cy.fixture('example').then((data) =>{

            const sr = new Search()
            sr.clickNotification()
            sr.searchFunction(data.searchFilm)
            sr.selectDropdown()
            sr.verifySearch(data.expectedFilm)
        })

})

})