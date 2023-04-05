class Search{

    btnNotification= '#onesignal-slidedown-cancel-button'
    txtSearch= '#search > .search-content > form > .form-control'
    dropDown= '#search > .search-content > .nav >'
    verifySearchResult = '.heading-name > a'

    clickNotification(){
        cy.get(this.btnNotification).click()
    }

    searchFunction(searchFilm){
        cy.get(this.txtSearch)
            .click()
            .type(searchFilm)
    }

    selectDropdown(){
        cy.get(this.dropDown)
            .eq(0)
            .click()

    }

    verifySearch(expectedFilm){
        cy.get(this.verifySearchResult)
                .should('be.visible')
                .should('have.text', expectedFilm)
    }
}

export default Search
