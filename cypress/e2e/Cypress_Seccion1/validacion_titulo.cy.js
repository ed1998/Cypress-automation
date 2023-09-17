/// <reference types = "cypress" />

describe("Sección 1 validación título", () => {
    it("test validar título", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        
        cy.log('Correcto funcionamiento')
    })
  });
  