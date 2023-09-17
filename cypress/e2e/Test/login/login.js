import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

const loginPage = require('../../../../e2e/Integration/Test/pages/loginPage');

Given ('A User fills login data with user {string} and password {string}', (user, password)=>{

    loginPage.navigationLogin();

    //Llamar la acción para click en botón -> recibe user y psw 


})


