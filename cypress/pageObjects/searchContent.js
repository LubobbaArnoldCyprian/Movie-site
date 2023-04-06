import locators from "./locators"


const notification = () =>{
    cy.get(locators.btnNotification).click()

}

const filmSearch = (searchFilm) =>{
    cy.get(locators.txtSearch)
    .click()
    .type(searchFilm)
   
}

const drpDown = () =>{
    cy.get(locators.dropDown)
    .eq(0)
    .click()
}

const verifyMovie = (expectedFilm) =>{
    cy.get(locators.verifySearchResult)
    .should('be.visible')
    .should('have.text', expectedFilm)
}


export default {
    notification,
    filmSearch,
    drpDown,
    verifyMovie
}