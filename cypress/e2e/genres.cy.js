import genres from "../pageObjects/genres"
import searchContent from "../pageObjects/searchContent"

describe('search content & check content detail page', ()=>{


    beforeEach(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)
            searchContent.notification()
            genres.genreMenu()

        })
    })

    it('Action', function(){
        cy.fixture('example').then((data) =>{
           genres.genreAction()
           genres.genreVerify(data.expectedAction)
           genres.genreActionFilmVerify(data.expectAction)        
        })
       
    })

    it('Adventure', function(){
        cy.fixture('example').then((data) =>{
            genres.genreAdventure()
            genres.genreVerify(data.expectedAdventure)
            genres.genreAdventureFilmVerify(data.expectAdventure)
        })
    })

    
        it('Animation', function(){
        cy.fixture('example').then((data) =>{
            genres.genreAnimation()
            genres.genreVerify(data.expectedAnimation)
            genres.genreAnimationFilmVerify(data.expectAnimation)
        })
    })

    
})