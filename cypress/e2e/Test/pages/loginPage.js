const { first } = require("lodash");

class loginPage {
    elements = {
        miCuentaDropDown: () => cy.get(".my-account-dropdown.js-guest > .dropdown-button > span"),
        //Continuar declarando variables 
    }


navigationLogin (){
    this.elements.miCuentaDropDown().click({force:true}); 

    } 
   //Declarar metodo para email, psw y click en botón
}