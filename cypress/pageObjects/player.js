import locators from "./locators";

const watchNow = () =>{
    cy.get('.dp-i-c-stick > .btn-focus').click()
    // cy.wait(5000)
    // cy.get('kK+Pn').click()
    cy.get('.modal-content > .modal-header > .close >').click({ force: true })
}




export default{
    watchNow
}