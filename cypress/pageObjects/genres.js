import locators from "./locators";

const genreMenu = () =>{
    cy.get(locators.genreNavigation).click()
    cy.get(locators.genreMenuClick).click()
    
}

// Action
const genreAction = () =>{
    cy.get(locators.genreAction).click() 

}
const genreVerify = (expectedAction) =>{
   
    cy.get(locators.genreVerify)
        .should('be.visible')
        .should('have.text', expectedAction)

}

const genreActionFilmVerify = (expectAction) =>{
    cy.get(locators.filmposter)
        .should('be.visible')
        .click()
    cy.get(locators.actionScroll).scrollIntoView()
            
    cy.get(locators.genreActionFilmVerify)
        .should('be.visible')
        .should('have.text', expectAction)

}

//Adventure
const genreAdventure = () =>{
    cy.get(locators.genreAdventure).click()  

}

const genreAdventureFilmVerify = (expectAdventure) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreAdventureFilmVerify)
    .should('be.visible')
    .should('have.text', expectAdventure)

}

// Animation
const genreAnimation = () =>{
    cy.get(locators.genreAnimation).click()

}

const genreAnimationFilmVerify = (expectAnimation) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreAnimationFilmVerify)
    .should('be.visible')
    .should('have.text', expectAnimation)

}

// Romance
const genreRomance = () =>{
    cy.get(locators.genreRomance).click()

}

const genreRomanceFilmVerify = (expectRomance) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreRomanceFilmVerify)
    .should('be.visible')
    .should('have.text', expectRomance)

}


// Biography
const genreBiography = () =>{
    cy.get(locators.genreBiography).click()

}

const genreBiographyFilmVerify = (expectBiography) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreBiographyFilmVerify)
    .should('be.visible')
    .should('have.text', expectBiography)

}



// Comedy
const genreComedy = () =>{
    cy.get(locators.genreComedy).click()

}

const genreComedyFilmVerify = (expectComedy) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreComedyFilmVerify)
    .should('be.visible')
    .should('have.text', expectComedy)

}




// Crime
const genreCrime = () =>{
    cy.get(locators.genreCrime).click()

}

const genreCrimeFilmVerify = (expectCrime) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreCrimeFilmVerify)
    .should('be.visible')
    .should('have.text', expectCrime)

}


// Documentary
const genreDocumentary = () =>{
    cy.get(locators.genreDocumentary).click()

}

const genreDocumentaryFilmVerify = (expectDocumentary) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreDocumentaryFilmVerify)
    .should('be.visible')
    .should('have.text', expectDocumentary)

}


// Drama
const genreDrama = () =>{
    cy.get(locators.genreDrama).click()

}

const genreDramaFilmVerify = (expectDrama) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreDramaFilmVerify)
    .should('be.visible')
    .should('have.text', expectDrama)

}


// Family
const genreFamily = () =>{
    cy.get(locators.genreFamily).click()

}

const genreFamilyFilmVerify = (expectFamily) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreFamilyFilmVerify)
    .should('be.visible')
    .should('have.text', expectFamily)

}


// Fantasy
const genreFantasy = () =>{
    cy.get(locators.genreFantasy).click()

}

const genreFantasyFilmVerify = (expectFantasy) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreFantasyFilmVerify)
    .should('be.visible')
    .should('have.text', expectFantasy)

}


// History
const genreHistory = () =>{
    cy.get(locators.genreHistory).click()

}

const genreHistoryFilmVerify = (expectHistory) =>{
    cy.get(locators.filmposter)
    .should('be.visible')
    .click()
cy.get(locators.actionScroll).scrollIntoView()
        
cy.get(locators.genreHistoryFilmVerify)
    .should('be.visible')
    .should('have.text', expectHistory)

}





export default{
    //action
    genreMenu,
    genreAction,
    genreVerify,
    genreActionFilmVerify,


    // Adventure
    genreAdventure,
    genreAdventureFilmVerify,

    // Animation
    genreAnimation,
    genreAnimationFilmVerify,

    //Romance
    genreRomance,
    genreRomanceFilmVerify,

    // Biography
    genreBiography,
    genreBiographyFilmVerify,

    //comedy
    genreComedy,
    genreComedyFilmVerify,

    // Crime 
    genreCrime,
    genreCrimeFilmVerify,

    // Documentary

    genreDocumentary,
    genreDocumentaryFilmVerify,
    
    // Drama
    
    genreDrama,
    genreDramaFilmVerify,

    // Family

    genreFamily,
    genreFamilyFilmVerify,
    
    // Fantasy
    
    genreFantasy,
    genreFantasyFilmVerify,
    
    // History
    
    genreHistory,
    genreHistoryFilmVerify
    



}