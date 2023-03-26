describe("Auth_login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Login page can be opened", () => {
    cy.contains("Correo electrónico");
  });

  it("Login using correct credentials", () => {
    cy.contains("Correo electrónico");
    cy.get("[data-test-id=login-form] input[name=email]").type(
      "jonathantest222@gmail.com"
    );
    cy.get("[data-test-id=login-form] input[name=password]").type(
      "jonathan118761A$"
    );
    cy.contains("button", "Iniciar Sesión").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.getCookie("auth").should("exist");
    cy.get("h2").first().should("contain", "Categorías");
  });

  it("Login using wrong credentials", () => {
    cy.contains("Correo electrónico");
    cy.get("[data-test-id=login-form] input[name=email]").type(
      "jonathantest222@gmail.com"
    );
    cy.get("[data-test-id=login-form] input[name=password]").type(
      "jonathan118761A"
    );
    cy.contains("button", "Iniciar Sesión").click();
    cy.getCookie("auth").should("not.exist");
    cy.contains("button", "Iniciar Sesión").should("exist");
  });
});