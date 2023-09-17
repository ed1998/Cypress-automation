/// <reference types = "cypress" />
describe("Login", () => {
    it("Succes login", () =>{
        cy.visit("https://demoqa.com/login") 
        cy.get ('#userName').type('j.ampudia')
        cy.get ('#password').type('Millos098!')
        cy.get ('#login').click()
    })
  });