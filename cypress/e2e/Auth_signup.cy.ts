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
    cy.get("[data-test-id=signup-form] input[name=email]").type(
      `${id}_testing@meetu.com`
    );
    cy.get("[data-test-id=signup-form] input[name=name]").type(`testing_${id}`);
    cy.get("[data-test-id=signup-form] input[name=password]").type(
      `Testing_${id}`
    );
    cy.get("[data-test-id=signup-form] input[name=passwordConfirm]").type(
      `Testing_${id}`
    );
    cy.contains("button", "Registrarse").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.getCookie("auth").should("exist");
    cy.contains("Cuenta creada con éxito");
  });

  it("Signup in existing account", () => {
    cy.contains("Correo electrónico");
    cy.get("[data-test-id=signup-form] input[name=email]").type(
      `${id}_testing@meetu.com`
    );
    cy.get("[data-test-id=signup-form] input[name=name]").type(`testing_${id}`);
    cy.get("[data-test-id=signup-form] input[name=password]").type(
      `Testing_${id}`
    );
    cy.get("[data-test-id=signup-form] input[name=passwordConfirm]").type(
      `Testing_${id}`
    );
    cy.contains("button", "Registrarse").click();
    cy.contains("Ocurrió un error, intenta de nuevo");
    cy.getCookie("auth").should("not.exist");
  });
});
