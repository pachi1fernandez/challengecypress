export function createUser() {
  const randomNumber = Math.floor(Math.random() * 100000);
  const newUser = `email${randomNumber}@newuser.com`;

  cy.log("Create user.");

  cy.visit("https://automationexercise.com/");
  cy.get(".shop-menu > .nav > :nth-child(4) > a").should("be.visible").click();

  cy.get('[data-qa="signup-name"]')
    .should("be.visible")
    .type(`New User ${randomNumber}`);
  cy.get('[data-qa="signup-email"]').type(newUser);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('[data-qa="password"]').should("be.visible").type("password");
  cy.get('[data-qa="first_name"]').type("New");
  cy.get('[data-qa="last_name"]').type("User");
  cy.get('[data-qa="address"]').type("Address 123");
  cy.get('[data-qa="state"]').type("Sate");
  cy.get('[data-qa="city"]').type("City");
  cy.get('[data-qa="zipcode"]').type("1111");
  cy.get('[data-qa="mobile_number"]').type("4444444");
  cy.get('[data-qa="create-account"]').click();
  cy.get("b").should("contain.text", "Account Created!");
  cy.get('[data-qa="continue-button"]').click();

  return newUser;
}
