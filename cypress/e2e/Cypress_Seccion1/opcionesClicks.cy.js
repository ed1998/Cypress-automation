/// <reference types = "cypress" />

describe("Opciones de click", () => {
  
  // Click sencillo
  it("Click sencillo", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(2000);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("Admin");
    cy.wait(2000);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("admin123");
    cy.wait(2000);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"
    )
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get(
      "#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a"
    )
      .should("be.visible")
      .click();
  });

    //Click forzado
  it("Click force true", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(2000);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("Admin");
    cy.wait(2000);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("admin123");
    cy.wait(2000);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"
    )
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get(
      "#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a"
    )
      .should("be.visible")
      .click({ force: true });
  });

  //Click por coordenadas X, Y
  it.only("Click por coordenadas", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(800);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("Admin");
    cy.wait(800);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("admin123");
    cy.wait(800);
    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"
    )
      .should("be.visible")
      .click();
    cy.wait(800);
   
    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title").click(70, 10)
    cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title").click(50, 5)


  });
});
