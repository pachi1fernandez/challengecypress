import { createUser } from "../utils/common";

describe("challenge", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  let userEmail;
  let userSignUp;

  it("Sign up", () => {
    userSignUp = createUser();

    cy.wrap(userSignUp).as("userEmail");
  });

  it("Log in", () => {
    userEmail = createUser();

    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get('[data-qa="login-email"]').type(userEmail);
    cy.get('[data-qa="login-password"]').type("password");
    cy.get('[data-qa="login-button"]').click();
  });

  //delete users created
  afterEach(() => {
    let currentUser;
    if (Cypress.currentTest.title.includes("Log in") && userEmail) {
      cy.log(`Delete account for test Log in: "${Cypress.currentTest.title}" user: ${userEmail}`)
      currentUser = userEmail
    } else {
      currentUser = userSignUp
    }

    if (currentUser) {
      cy.log(`Delete account: ${currentUser}`)

      cy.get(".shop-menu > .nav > :nth-child(5) > a").should("be.visible").click()
      cy.get("b").should("contain.text", "Account Deleted!")
      cy.get('[data-qa="continue-button"]').click()
    }
  });
});
