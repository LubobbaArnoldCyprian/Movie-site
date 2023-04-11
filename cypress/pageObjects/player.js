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
    cy.wait(17000)
    cy.get('#iframe-embed').click({force: true})
         .find('#app').click()
        
  
    // cy.get('#watch-iframe').click({force: true})
    // cy.wait(12000)

    // const pp = cy
    //     .get('#iframe-embed')
    //     .find('#app').click()
    //     // .its('0.contentDocument.body')
    //     // .should('be.visible')

        

    //     .then(cy.wrap)
        
    // pp.click({ multiple: true })
    

    
    // select the iframe element by its CSS selector
    // cy.get('#iframe-embed').then($iframe => {

  // switch into the iframe
    // const iframe = $iframe.contents().find('body')
    // cy.wrap(iframe).as('iframe')

  // select the parent div inside the iframe
    // cy.get('@iframe')
        // .wait(10000)
        // .get('#app',{retryOnStatusCodeFailure: true}).then($parent => {

    // select the child div inside the parent div
    // const childDiv = $parent.get('#player',{retryOnStatusCodeFailure: true})
    // childDiv.click()

    // click the child div
    // $parent.get('#player',{retryOnStatusCodeFailure: true})
    // cy.wrap().click()
//   })

}

    



    //    .find(".vjs-big-play-button").click()

export default{
    watchNow
}