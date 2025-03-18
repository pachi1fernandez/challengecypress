/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://automationexercise.com/')
  })

  it('Sign up MODIFICAR', () => {
    
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    const randomNumber = Math.floor(Math.random() * 100); // Número entre 0 y 99
    cy.get('[data-qa="signup-name"]').type(`New User ${randomNumber}`)
    cy.get('[data-qa="signup-email"]').type(`email@newuser.com ${randomNumber}`)

    cy.get('[data-qa="signup-button"]').click()

    cy.get('[data-qa="password"]').type('password')
    cy.get('[data-qa="first_name"]').type(`New User ${randomNumber}`)
    cy.get('[data-qa="last_name"]').type(`Lastname ${randomNumber}`)
    cy.get('[data-qa="address"]').type('Address 123')
    cy.get('[data-qa="state"]').type('Sate')
    cy.get('[data-qa="city"]').type('City')
    cy.get('[data-qa="zipcode"]').type('1111')
    cy.get('[data-qa="mobile_number"]').type('4444444')
    cy.get('[data-qa="create-account"]').click()

    cy.get('b').should('contain.text','Account Created!')
    cy.get('.col-sm-9 > :nth-child(2)').should,('contain.text','Congratulations! Your new account has been successfully created!')
    cy.get('.col-sm-9 > :nth-child(3)').should,('contain.text','You can now take advantage of member privileges to enhance your online shopping experience with us.')

    cy.get('[data-qa="continue-button"]').click()


  })

})
