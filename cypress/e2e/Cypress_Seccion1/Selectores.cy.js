/// <reference types = "cypress" />

require('cypress-xpath');

describe("Tipos de selectores", () => {
  //Selectores por ID #
  it("Selector por ID", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");
    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    cy.get("#wsf-1-field-21").should("be.visible").type("John");
    cy.get("#wsf-1-field-22").should("be.visible").type("Restrepo");
  });
  // Selectores por atributo o placeholder
  it("Selector por atributo", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");
    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);
    //cy.get("{placeholder='Email'}").should("be.visible").type("prueba@test.com")
    cy.get('input[placeholder="Email"]')
      .should("be.visible")
      .type("prueba@test.com");
  });
    // Selectores por Xpath
    it("Selector por Xpath", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/");
        cy.title().should("eq", "Datos Personales | TestingQaRvn");
        cy.wait(1000);
        //Xpath
        cy.xpath('//*[@id="wsf-1-field-21"]').should("be.visible").type("Name")
        cy.wait(1000);
        cy.xpath('//input[contains(@name,"field_22")]').should("be.visible").type("Test")
        cy.wait(1000);
        cy.xpath('//input[contains(@id,"wsf-1-field-23")]').should("be.visible").type("test@test.com")
        cy.wait(1000);
      });

    // Selectores por contains (Radio buttons)
    it("Selector por contains", () => {
        cy.visit("https://testingqarvn.com.es/radio-buttons/");
        cy.title().should("eq", "Radio Buttons | TestingQaRvn");
        cy.wait(1000);
        
        cy.get(".wsf-label").contains("CypressIO").click()
        cy.wait(1000);
        cy.get(".wsf-label").contains("Selenium").click()
    });
    
        // Selector Copy selector
        it.only("Selector por contains", () => {
            cy.visit("https://testingqarvn.com.es/radio-buttons/");
            cy.title().should("eq", "Radio Buttons | TestingQaRvn");
            cy.wait(1000);
            
            cy.get("#wsf-1-field-37").should("be.visible").type("NameTest")
        });

});
