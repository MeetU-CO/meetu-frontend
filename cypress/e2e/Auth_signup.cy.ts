/// <reference types="Cypress"/>

describe("Auth_signup", () => {
  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();

  beforeEach(() => {
    cy.visit("/signup");
  });

  it("Signup page can be opened", () => {
    cy.contains("Correo electrónico");
  });

  it("Signup in non existing account", () => {
    cy.contains("Correo electrónico");
    cy.get("input[name=email]").type(`${id}_testing@meetu.com`);
    cy.get("input[name=name]").type(`testing_${id}`);
    cy.get("input[name=password]").type(`Testing_${id}`);
    cy.get("input[name=passwordConfirm]").type(`Testing_${id}`);
    cy.contains("button", "Registrarse").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.getCookie("auth").should("exist");
    cy.get("h2").first().should("contain", "Categorías");
  });

  it("Signup in existing account", () => {
    cy.contains("Correo electrónico");
    cy.get("input[name=email]").type(`${id}_testing@meetu.com`);
    cy.get("input[name=name]").type(`testing_${id}`);
    cy.get("input[name=password]").type(`Testing_${id}`);
    cy.get("input[name=passwordConfirm]").type(`Testing_${id}`);
    cy.contains("button", "Registrarse").click();
    cy.getCookie("auth").should("not.exist");
    cy.contains("button", "Registrarse").should("exist");
  });
});
