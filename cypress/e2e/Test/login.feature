Feature: Login

Scenario: Login succes 

Given A User fills login data with user "jhon.gutierrez@tiendmia.com" and password "Contraseña123"
When A User click login button 
Then A User loguea exitosamente
And A User home page redirect