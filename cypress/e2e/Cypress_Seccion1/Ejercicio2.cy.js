/// <reference types = "cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Check #2 conocimientos", () => {
    it("Ejercicio 2 Selectores", () =>{
        cy.visit("http://computer-database.gatling.io/computers")  
        cy.title().should('eq', 'Computers database')
        cy.wait(500)
        
        //Insertando datos con XPath en buscador
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.wait(500)

        //Función click
        cy.get("#searchsubmit").should("be.visible").click({force:true})
        cy.wait(500)

        //Agregar datos
        cy.get("#add").should("be.visible").click({force:true})
        cy.wait(500)

        //Insertando datos en el formulario
        cy.get("#name").should("be.visible").type("Cypress").tab().
        type("2023-01-03").tab().
        type("2023-01-08")
        cy.wait(500)

        /*
        - Forma 1 de selección en dropdown sin validación de campo
        cy.get("#company").should("be.visible").select(7).invoke("val")

        - Forma 2 de selección en dropdown con validación de campo en posición del arreglo
        cy.get("#company").should.("be.visible").select(7).invoke("val").should("eq", "7")*/

        /*- Forma 3. Nueva de validación del campo seleccionado con nombre y posición de array*/
        cy.get("#company").should("be.visible").select("Nokia").should("have.value", "16")
        cy.wait(500)

        cy.get(".primary").should("be.visible").click({force:true})
        cy.wait(500)

        /* Formas de declarar el mismo campo */

        // #searchsubmit -> Identificador
        // //*[@id="searchsubmit"] -> copiado xpath desde consola
        // //input[@id='searchsubmit'] -> copiado xpath desde ChroPath
        // //input[contains(@id,'searchsubmit')] -> copiado xpath desde TRUEPATH

        cy.xpath("//input[contains(@id,'searchbox')]").type("Cypress")
        cy.wait(500)

        cy.xpath("//*[@id='searchsubmit']").should("be.visible").click({force:true})
        cy.wait(500)
        
    })
  });
  