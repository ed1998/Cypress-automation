/// <reference types = "cypress" />
require('cypress-xpath')


describe("Checkbox 1", () => {
  it("Prueba inicial checkbox", () => {
    cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    //Check todos los campos
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.wait(1000);

    //Descheckear todos los campos
    cy.get('[type="checkbox"]').uncheck().should("not.be.checked");
  });

  it("Check por seleccion", () => {
    cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    //Seleccionando con check

    /*cy.get("#isAgeSelected").check().should('be.checked')
    cy.xpath("(//input[@type='checkbox'])[5]").check()*/

    //Seleccionando con click

    cy.get("#isAgeSelected").click()
    cy.xpath("(//input[@type='checkbox'])[5]").click()


  });

  it.only("Radio button", () => {
    cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Radio buttons demo for Automation"
    );
    cy.wait(1000);

    cy.get(".panel-body > :nth-child(3) > input").check()
    cy.wait(1000);

    cy.get(".panel-body > :nth-child(2) > :nth-child(2) > input").click()

  });

});
