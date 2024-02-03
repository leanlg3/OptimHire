const { defineConfig } = require("cypress");
import homePage from "../pages/homePage";

describe("Test task for Symphony Solutions", () => {
    const home = new homePage();
    const userName = "Leandro";
    const pass = "123admin"
    const creditCard = "123456"
    

      cy.visit("https://www.demoblaze.com/");


    it('Register new user',()=>{
        home.getNavBar().should('be.visible')
        home.getSignUpLink().click()
        home.getSignUpModalTitle().should('be.visible')
        home.getSignUserNameField().type(userName)
        home.getPasswordField().type(pass)
        home.getSignPasswordField().click()
        home.getSignUpModalTitle().should('not.be.visible')
        home.getLoginLink().click()
        home.getLoginModalTitle().should('be.visible')
        home.getLoginUserNameField().type(userName)
        home.getLoginPasswordField().type(pass)
        home.getLogInButton().click()
        home.getUserId().should("contain.text", userName)

    })

    it('test 2', ()=>{
        home.getNavBar().should('be.visible')
        home.getLoginLink().click()
        home.getLoginModalTitle().should('be.visible')
        home.getLoginUserNameField().type(userName)
        home.getLoginPasswordField().type(pass)
        home.getLogInButton().click()
        home.getUserId().should("contain.text", userName)
        home.getPhoneTitle().contains("Samsung galaxy s6").click()
        home.getAddToCartButton().click()
        cy.on('window:alert',function(alertText){
            expect(alertText).eq('Product added.')
        })
        home.getHomeLink().click()
        home.getPhoneTitle().contains("Nexus 6").click()
        home.getAddToCartButton().click()
        cy.on('window:alert',function(alertText){
            expect(alertText).eq('Product added.')
        })
        home.getCartLink().click()
        home.getDeleteFirstProduct().click()
        home.getPlaceOrderButton().click()
        home.getOrderName().type(userName)
        home.getOrderCCard().type(creditCard)
        home.getConfirmationButton().click()
        home.getNavBar().should('be.visible')
    })

    it('test 3', ()=>{
        home.getNavBar().should('be.visible')
        home.getLoginLink().click()
        home.getLoginModalTitle().should('be.visible')
        home.getLoginUserNameField().type(userName)
        home.getLoginPasswordField().type(pass)
        home.getLogInButton().click()
        home.getUserId().should("contain.text", userName)
        home.getPhoneTitle().contains("Samsung galaxy s6").click()
        home.getAddToCartButton().click()
        cy.on('window:alert',function(alertText){
            expect(alertText).eq('Product added.')
        })
        home.getCartLink().click()
        home.getPlaceOrderButton().click()
        home.getOrderName().type(userName)
        home.getOrderCCard().type(creditCard)
        home.getConfirmationButton().click()
        home.getNavBar().should('be.visible')
    })
})