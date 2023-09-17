/// <reference types = "cypress" />


require('cypress-plugin-tab')

describe("Función Tab", () => {
  it("Type con tab", () => {
    cy.visit("https://ivscertificaciones.com/contacto.html");
    cy.title().should("eq", "Contáctenos - IVS Certificaciones");
    cy.wait(1500)

    cy.get("#establecimiento").type("EDS el naranjal").tab().
    type("Juan").tab().
    type("Veloza")
  });
});
