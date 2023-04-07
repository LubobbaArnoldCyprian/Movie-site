import locators from "./locators";

const watchNow = () =>{
    cy.get('.dp-i-c-stick > .btn-focus').click()
    // cy.wait(5000)
    // cy.get('kK+Pn').click()
    cy.get('.modal-content > .modal-header > .close >').click({ force: true })
    cy.get('#watch-9080968').click()
    cy.get('.watching > .container').scrollIntoView()
    cy.wait(3000)

    // cy.get('#iframe-embed')
    //     // .its('0.contentDocument.body')
    //     .should('be.visible')
    //     .then(cy.wrap)


    cy.get('#iframe-embed').then(function($ele){

        var tax = $ele.contents().find("vjs-big-play-buttonr")
        cy.wrap(tax).click()
    })
    // cy.get('.vjs-big-play-button').click( { force: true })
    
}




export default{
    watchNow
}