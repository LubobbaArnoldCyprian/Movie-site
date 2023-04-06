/// <reference types="cypress" />

import Search from "../PageObjects/searchContent"

import searchContent from "../PageObjects/searchContent"

describe('search content & check content detail page', ()=>{


    before(function(){
        cy.fixture('example').then((access) =>{
            cy.visit(access.baseurl)

        })
    })



    it('Test case one', function(){

        cy.fixture('example').then((data) =>{
            searchContent.notification()
            searchContent.filmSearch(data.searchFilm)
            searchContent.drpDown()
            searchContent.verifyMovie(data.expectedFilm)

        })

    })

  




})

// https://testautomationu.applitools.com/cypress-tutorial/chapter7.html