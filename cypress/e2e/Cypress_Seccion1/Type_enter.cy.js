/// <reference types = "cypress" />

describe("Funciones Type", () => {
    it("Type  --> ENTER ", () =>{
        cy.visit("https://www.google.com/?hl=es")  
        cy.title().should('eq', "Google")
        cy.wait(1500)

        //Forma 1 ingresar valores
        //cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").type("cypress io")

        //Forma 2 ingresar valores y buscar con enter (q = nombre de la etiqueta del buscador)
        cy.get("[name = 'q']").type("facebook {enter}" )
        cy.wait(1000)

        //Función clic copiando el selector desde el elemento
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    })
  });