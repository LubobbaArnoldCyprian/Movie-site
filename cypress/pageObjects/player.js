import locators from "./locators";
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

const watchNow = () =>{
    cy.get(locators.watchNow).click()
    cy.wait(5000)
    // cy.get('kK+Pn').click()
    cy.get(locators.sharingBanner).click({ force: true })
    cy.get(locators.changeServer).click()
    cy.get(locators.playerInView).scrollIntoView()
    cy.get(locators.playerInView).should("be.visible")
    // cy.wait(12000)

    const pp = cy
        .get('#iframe-embed')
        // .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
     
 
    pp.click({ multiple: true })
    //    .find(".vjs-big-play-button").click()

}


export default{
    watchNow
}