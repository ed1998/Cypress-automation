/// <reference types = "cypress" />

describe("Introducción a los asserts", () => {
  it("Demo asserts", () => {
    cy.visit("https://testingqarvn.com.es/contacto-2/");
    cy.title().should("eq", "Contactanos | TestingQaRvn");
    cy.wait(1000);

    cy.get("#wsf-1-field-110").should("be.visible").type("John")
    cy.wait(1000);
    cy.get("#wsf-1-field-111").should("be.visible").type("GR")
    cy.wait(1000);
    cy.get("#wsf-1-field-112").should("be.visible").should("be.enabled").type("jhongtrrz@gmail.com")
  });
});
