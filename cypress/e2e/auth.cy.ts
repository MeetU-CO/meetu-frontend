describe("Auth", () => {
  it("Login page can be opened", () => {
    cy.visit("/login");
    cy.contains("Correo electrónico");
  });

  it("Login using correct credentials in email", () => {
    cy.visit("/login");
    cy.contains("Correo electrónico");
    cy.get("input[name=email]").type("jonathantest222@gmail.com");
    cy.get("input[name=password]").type("jonathan118761A${enter}");
    cy.wait(5000);
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.getCookie("auth").should("exist");
    cy.get("h2").first().should("contain", "Categorías");
  });
});
