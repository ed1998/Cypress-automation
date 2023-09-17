/// <reference types = "cypress" />

describe("Ejemplo type pageUp, pageDown y only", () => {
  //Page down
  it("Type page down ", () => {
    cy.visit("https://ivscertificaciones.com/contacto.html");
    cy.title().should("eq", "Contáctenos - IVS Certificaciones");
    cy.wait(1500);

    cy.get("#establecimiento").type("{pagedown}");
    cy.wait(1000);
  });
  //Page up
  it.only("Type only 1", () => {
    cy.visit("https://ivscertificaciones.com/contacto.html");
    cy.title().should("eq", "Contáctenos - IVS Certificaciones");
    cy.wait(1500);

    cy.get("#establecimiento").type("{pageup}");
    cy.wait(1000);
  });
  //Función Only
  it.only("Type only 2", () => {
    cy.visit("https://ivscertificaciones.com/contacto.html");
    cy.title().should("eq", "Contáctenos - IVS Certificaciones");
    cy.wait(1500);

    cy.get("#establecimiento").type("{pagedown}");
    cy.wait(1000);
  });
});
