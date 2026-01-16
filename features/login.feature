Feature: Login en SauceDemo
  Como usuario
  Quiero iniciar sesión
  Para acceder a los productos

  Scenario: Login con credenciales
    Given que estoy en la página de login 
    When ingreso credenciales válidas "standard_user" y "secret_sauce"
    Then debo ver la página de productos

#im on the login page
#Enter valid credentials "" and ""
#I hope to see the product page