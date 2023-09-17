/// <reference types = "cypress" />

require('cypress-xpath')

describe("Ejercicio seleccionar y añadir", () => {
    it("Seleccionar y adicionar nombres", () =>{
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")  
        cy.title().should("eq", "Selenium Easy - JQuery Dual List Box Demo")
        cy.wait(1500)

        //Se trajo la información de los get con los selectores del navegador y se utilizó la promesa
        cy.get('#pickList > div > div:nth-child(1) > select').should("be.visible").select([0, 2, 4]).then(()=>{
        //cy.wait(1000)
        cy.get('.pAdd').should("be.visible").click().then(()=>{
            cy.get(".pAddAll").click().then(()=>{
                cy.get(".pRemoveAll").click().then(()=>{
                    cy.wait(1000)
                    cy.log("Se eliminaron todos los elementos")
                })
            })
        })
    })

    })

  });
  