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

}