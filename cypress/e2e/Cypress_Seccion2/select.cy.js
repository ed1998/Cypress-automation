/// <reference types = "cypress" />

require('cypress-xpath')

describe("Select dropdown", () => {
    it("select 1", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")  
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get("#select-demo").should("be.visible").select("Monday").should("have.value", "Monday")
        cy.wait(1000)
        cy.get("#select-demo").should("be.visible").select("Friday").should("have.value", "Friday")
    })

    //Buscar contenido en el navegador
    it("select 2", () =>{
        cy.visit("https://google.com/")  
        cy.title().should("eq", "Google")
        cy.wait(1000)

    //Buscar con enter
        cy.get("[name = 'q']").should("be.visible").type("Audi").type("{enter}")
    //Seleccionar ver imágenes
        cy.get(".MUFPAc > :nth-child(2) > a").should("be.visible").click();
    //Ingresar texto y seleccionar opción desde el navegador-- No funciona
        /*cy.get("[name = 'q']").should("be.visible").type("Audi")
        cy.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div/ul/li[4]/div/div[2]/div[1]/span").click()*/
    })

    it("select - Multiselect", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")  
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        //Función selectores múltiples
        cy.get("#multi-select").should("be.visible").select(['California', 'Ohio', 'Texas'])
      
        })

    it.only("select - Multiselect - Promesas", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")  
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)
    
            //Función selectores múltiples
        cy.get("#multi-select").should("be.visible").select(['California', 'Ohio', 'Texas']).then(()=>{
            cy.get('#printMe').should("be.visible").click()
        })
          
        })

  });
  