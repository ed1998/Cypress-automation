/// <reference types = "cypress" />

require('cypress-xpath')
// find_eq
describe("Asserts finds, eq", () => {
    //Asserts contains
    it("Validacion producto nuevo", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should("eq", "My Shop")
        cy.wait(1000)

        cy.get(".product-container").find(".product-image-container").eq(2).click({force:true})

    })

    //Aserts find eq
    it("Select product new condition", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should("eq", "My Shop")
        cy.wait(1000)

        cy.get(".product-container").find(".product-image-container").eq(2).click({force: true})
        
        cy.get("#product_condition .editable").then((e)=>{
            let status=s.text()
            if (status== "New product"){
                cy.log("El vestido es nuevo")
            }
        })

    })

    it.only("Select product new condition", () => {
        cy.visit("https://www.tiendamia.co/")
        cy.title().should("eq", "Compra en USA y Recibe en Colombia")
        cy.wait(1000)

        cy.get(".item").find(".product-image").eq(0).click({force: true})
        
        cy.get(".product-detail").then((s)=>{
            let status=s.text()
            if (status== "Nuevo"){
                cy.log("El producto es nuevo")
            }
        })

    })


    it("Condicional, selecciona la marca", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should("eq", "Automation Exercise")
        cy.wait(1000)

        cy.get(".col-sm-4").find(".choose").eq(4).click()
        cy.get(".col-sm-7").then((e)=>{
            //cy.log(e.text())
            //let brand=e.text()
            //cy.log(brand)
            /*if(brand=="Mast & Harbour"){
                cy.log("La marca es ".brand)
            }*/
            if(e.text()=="Mast & Harbour"){
                cy.log("La marca es ")
            }
        })

    })
    it("Select product", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.title().should("eq", "My Shop")
        cy.wait(1000)

        cy.get(".sf-with-ul").find(".choose").eq(4).click()

    })


})


