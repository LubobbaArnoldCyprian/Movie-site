// import Search from "../PageObjects/player"

import player from "../pageObjects/player"
import searchContent from "../pageObjects/searchContent"

describe('search content & check content detail page', ()=>{


    beforeEach(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)

        })
    })


    it('player', function(){

        cy.fixture('example').then((data) =>{
            
            searchContent.notification()
            searchContent.filmSearch(data.searchFilm)
            searchContent.drpDown()
            searchContent.verifyMovie(data.expectedFilm)

        })
        //
        player.watchNow()
    


})

})