/// <reference types = "cypress" />

const miCuentaDropDown = ".my-account-dropdown.js-guest > .dropdown-button > span";
const inicioSesionButton = ".my-account-dropdown.js-guest > #my-account-dropdown-dialog > .px-3 > .button-text-icon-large";
const user = '.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .email > .control > #email';
const password = '.login-container > .block.block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass';
const inicioSesion = '.fieldset > .actions-toolbar > div.primary > #send2';
const validacionSesionExitosa = '.dropdown-button > .js-fullname';
describe("Login", () => {
    it("test validar título", () =>{
        cy.visit("https://www.tiendamia.co/")
        cy.title().should('eq', 'Compra en USA y Recibe en Colombia')
        
        //Reemplaza click por mouseover
        cy.get(miCuentaDropDown).trigger('mouseover', {force:true});
        //cy.get(miCuentaDropDown).click()
        cy.get(inicioSesionButton).click()
        cy.get(user).should("be.visible").type("test@yopmail.com")
        cy.get(password).should("be.visible").type("Aa123123")
        cy.get(inicioSesion).should("be.visible").click({ force: true });
        //Validación página esperada
        cy.url().should('eq', 'https://www.tiendamia.co/')
        //Validación login exitoso - Nombre del usuario en banner
        cy.get(validacionSesionExitosa).should("be.visible").contains('test test')
      });
        //Validar campo usuario vacío
        //Validar campo usuario incorrecto
        //Validar campo contraseña vacío
        //Validar campo contraseña incorrecto
        //Implementar método invoke para abrir hipervínculo de olvidaste tu contraseña
      it("test campo usuario vacío", () =>{
          cy.visit("https://www.tiendamia.co/")
          cy.title().should('eq', 'Compra en USA y Recibe en Colombia')
          cy.get(miCuentaDropDown).trigger('mouseover', {force:true});
          cy.get(inicioSesionButton).click()
          cy.get(password).should("be.visible").type("Aa123123")
          cy.get(inicioSesion).should("be.visible").click({ force: true });
          cy.get('#email-error').should("be.visible").contains('Este campo es obligatorio.')
          cy.get(user).should("be.visible").type("test@yopmail.es")
        });

        it("test campo usuario incorrecto", () =>{
          cy.visit("https://www.tiendamia.co/")
          cy.title().should('eq', 'Compra en USA y Recibe en Colombia')
          cy.get(miCuentaDropDown).trigger('mouseover', {force:true});
          cy.get(inicioSesionButton).click()
          cy.get(user).should("be.visible").type("test@yopmail.es")
          cy.get(password).should("be.visible").type("Aa123123")
          cy.get(inicioSesion).should("be.visible").click({ force: true });
          cy.get('.message-error').should("be.visible").contains('El email y contraseña son incorrectas o tu cuenta está temporalmente deshabilitada. Intente nuevamente mas tarde.')
        });
        it("test campo contraseña vacío", () =>{
          cy.visit("https://www.tiendamia.co/")
          cy.title().should('eq', 'Compra en USA y Recibe en Colombia')
          cy.get(miCuentaDropDown).trigger('mouseover', {force:true});
          cy.get(inicioSesionButton).click()
          cy.get(user).should("be.visible").type("test@yopmail.es")
          cy.get(inicioSesion).should("be.visible").click({ force: true });
          cy.get('.message-error').should("be.visible").contains('El email y contraseña son incorrectas o tu cuenta está temporalmente deshabilitada. Intente nuevamente mas tarde.')
          
        });
    })
    
  