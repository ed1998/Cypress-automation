import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

const loginPage = require('../Test/pages/loginPage');

Given('Usuario Logueado', function(){

    cy.visit("/customer/account/login/")

})

/*Given el usuario debe estar logueado
And el usuario busca el artículo
And el usuario ingresa a la página del producto 
And el usuario agrega los productos al cart
And el usuario ingresa los datos de envio
And el usuario selecciona el metodo de envio
And el usuario ingresa los datos de pago
When el usuario selecciona el boton finalizar compra
Then el usuario evidencia el numero del pedido*/ 