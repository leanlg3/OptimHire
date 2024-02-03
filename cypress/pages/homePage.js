import cypress from "cypress";

class homePage {
    getSignUpLink(){
        return cy.get('#signin2');
    }

    getLoginLink(){
        return cy.get('#login2');
    }

    getSignUpModalTitle(){
        return cy.get('#signInModalLabel');
    }

    getLoginModalTitle(){
        return cy.get('#logInModalLabel')
    }

    getNavBar(){
        return cy.get('#navbarExample');
    }

    getSignUserNameField(){
        return cy.get('#sign-username');
    }

    getSignPasswordField(){
        return cy.get('#sign-password');
    }

    getLoginUserNameField(){
        return cy.get('#loginusername');
    }

    getLoginPasswordField(){
        return cy.get('#loginpassword');
    }

    getSignUpButton(){
        return cy.get('button.btn.btn-primary').contains('Sign up')
    }

    getLogInButton(){
        return cy.get('button.btn.btn-primary').contains('Log in')
    }
  
    getUserId(){
        return cy.get('#nameofuser')
    }

    getPhoneTitle(){
        return cy.get("h4.card-title")
    }
    getAddToCartButton(){
        return cy.get("a.btn.btn-success btn-lg")
    }

    getHomeLink(){
        return cy.get("a.nav-link").contains('Home')
    }

    getCartLink(){
        return cy.get("#cartur")
    }

    getDeleteFirstProduct(){
        return cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(4) > a')
    }

    getPlaceOrderButton(){
        return cy.get('button.btn.btn-success')
    }

    getOrderName(){
        return cy.get('#name');
    }

    getOrderCountry(){
        return cy.get('#country');
    }

    getOrderCity(){
        return cy.get('#city');

    }

    getOrderCCard(){
        return cy.get('#card');

    }

    getOrderMonth(){
        return cy.get('#month');
    }

    getOrderYear(){
        return cy.get('#year');
    }
    getPurchaseButton(){
        return cy.get("button[onclick='purchaseOrder()']")
    }

    getConfirmationButton(){
        return cy.get("button.confirm.btn.btn-lg.btn-primary")
    }

    getConfirmationInfoModal(){
        return cy.get("p.lead.text-muted")
    }
    
}


export default homePage;