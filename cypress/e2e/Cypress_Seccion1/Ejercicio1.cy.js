/// <reference types = "cypress" />

require('cypress-plugin-tab')

describe("Resúmen sección 4", () => {
    it("Sección 4", () =>{
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should('eq', "ComboBox | TestingQaRvn") 
        cy.wait(1500) 

        //Ingresar texto en el buscador:
        //cy.get("#searchBox").should("be.visible").type("Jhon")

        //Limpiar campo: 
        //cy.get("#searchBox").should("be.visible").type("Sierra")
        //Clear
        //cy.get("#searchBox").should("be.visible").clear()

        cy.get("#wsf-1-field-45").should("be.visible").type("Jhon").tab().
        type("Gutierrez").tab().
        type("jhongtrrz@gmail.com").tab().
        type(3152043272).tab().
        type("Cr 31 oeste #14-20")

        //Limpiar y modificar datos ingresados
        cy.get("#wsf-1-field-45").should("be.visible").clear().type("Edinson")
        cy.get("#wsf-1-field-48").should("be.visible").clear().type("3100316512")
        cy.get("#wsf-1-field-47").should("be.visible").clear().type("jhongtrrz@live.com")
       
        cy.get("#wsf-1-label-50-row-1").should("be.visible").click({force:true})
        cy.wait(1000)
        cy.get("#wsf-1-label-51-row-1").should("be.visible").click({force:true})
        cy.wait(1000)
        
        //Selección de opción en dropdown con validación de campo en este caso con número en array y nombre de elemento
        cy.get("#wsf-1-field-53").select(2).invoke("val").should("eq", "Mac")
        //.should("eq", "Windows")Se confirma que el nombre corresponda al seleccionado
        
        cy.wait(1000)
        cy.get("#wsf-1-field-52").should("be.visible").click({force:true})
       
    })
  })