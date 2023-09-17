/// <reference types = "cypress" />

describe("Primer test run con Cypress", () => {
  it("Primera prueba desde Cypress", () =>{
    cy.log("Prueba Jhon Gutierrez")
    cy.visit('https://testingqarvn.com.es/datos-personales/')

    cy.get ("#wsf-1-field-21").type("Lord")
    cy.wait(1500)
    cy.get ("#wsf-1-field-22").type("Baldomero")
    cy.wait(1500)
    cy.get ("#wsf-1-field-23").type("jgutierrez@tiendamia.com")    
    cy.wait(1500)
    cy.get ("#wsf-1-field-24").type("3789876")
    cy.wait (1500)
    cy.get ("#wsf-1-field-28").type("Baticueva")
    cy.get ("#wsf-1-field-27").click()
    cy.wait (1500)

  })
});
