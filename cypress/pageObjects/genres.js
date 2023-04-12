import locators from "./locators";

const genreMenu = () =>{
    cy.get(locators.genreNavigation).click()
    cy.get(locators.genreMenuClick).click()
    
}

const genreAction = () =>{
    cy.get(locators.genreAction).click() // Action

}
const genreVerify = (expectedAction, expectAction) =>{
   
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



export default{
    //action
    genreMenu,
    genreAction,
    genreVerify,
    genreActionFilmVerify

    //

}