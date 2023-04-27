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

    it('Romance', function(){
        cy.fixture('example').then((data) =>{
            genres.genreRomance()
            genres.genreVerify(data.expectedRomance)
            genres.genreRomanceFilmVerify(data.expectRomance)
        })
    })

    it('Biography', function(){
        cy.fixture('example').then((data) =>{
            genres.genreBiography()
            genres.genreVerify(data.expectedBiography)
            genres.genreBiographyFilmVerify(data.expectBiography)
        })
    })

    it('Comedy', function(){
        cy.fixture('example').then((data) =>{
            genres.genreComedy()
            genres.genreVerify(data.expectedComedy)
            genres.genreComedyFilmVerify(data.expectComedy)
        })
    })

    it('Crime', function(){
        cy.fixture('example').then((data) =>{
            genres.genreCrime()
            genres.genreVerify(data.expectedCrime)
            genres.genreCrimeFilmVerify(data.expectCrime)
        })
    })

    it('Documentary', function(){
        cy.fixture('example').then((data) =>{
            genres.genreDocumentary()
            genres.genreVerify(data.expectedDocumentary)
            genres.genreDocumentaryFilmVerify(data.expectDocumentary)
        })
    })

    it('Drama', function(){
        cy.fixture('example').then((data) =>{
            genres.genreDrama()
            genres.genreVerify(data.expectedDrama)
            genres.genreDramaFilmVerify(data.expectDrama)
        })
    })


//////

    it('Family', function(){
        cy.fixture('example').then((data) =>{
            genres.genreFamily()
            genres.genreVerify(data.expectedFamily)
            genres.genreFamilyFilmVerify(data.expectFamily)
        })
    })

    it('Fantasy', function(){
        cy.fixture('example').then((data) =>{
            genres.genreFantasy()
            genres.genreVerify(data.expectedFantasy)
            genres.genreFantasyFilmVerify(data.expectFantasy)
        })
    })


    it('History', function(){
        cy.fixture('example').then((data) =>{
            genres.genreHistory()
            genres.genreVerify(data.expectedHistory)
            genres.genreHistoryFilmVerify(data.expectHistory)
        })
    })




    
})