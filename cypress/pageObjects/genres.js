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
    genreAnimationFilmVerify

}