import locators from "./locators";

const watchNow = () =>{
    cy.get('.dp-i-c-stick > .btn-focus').click()
    // cy.wait(5000)
    // cy.get('kK+Pn').click()
    cy.get('.modal-content > .modal-header > .close >').click({ force: true })
    cy.get('#watch-9080968').click()
    cy.get('.watching > .container').scrollIntoView()
    cy.wait(8000)

    // cy.get('#iframe-embed')
    //     .should('be.visible')
    //     .then(cy.wrap)


    cy.get('#iframe-embed').then(function($ele){
        cy.reload()
        // cy.get('.vjs-big-play-button').click( { force: true })

        var tax = $ele.contents().find(".vjs-big-play-button")
        cy.wrap(tax).click()
    })
 
    
}




export default{
    watchNow
}