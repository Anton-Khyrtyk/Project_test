class Login{

    correctLogin(){
        cy.get('[data-test="username"]').type("standard_user").should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="password"]').should('have.attr', 'type', 'password');
        cy.get('[data-test="login-button"]').click();
        cy.url().should("include", "/inventory.html");
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
        return cy.get('[data-test="shopping-cart-link"]').should('be.visible');

    }
}

export default Login