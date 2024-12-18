class Login{

    settings(){
        cy.visit("https://unsplash.com/")
        cy.viewport(1920, 1080)
        cy.location('protocol').should('eq', 'https:')
        return cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')
    }

    btnLogin(){
        return cy.get('div[class="tHGFe"]').find('a[class= "LB2m0 XKj1X aZVYw Wm9ZP yZhvJ wmjc4"]').eq(1)
    }

    email(){
        return cy.get('[name="email"]')
    }

    password(){
        return cy.get('[name="password"]')
    }

    clickBtnLogin(){
        return cy.get('button[class="C4IdB vbbXa XKj1X aZVYw vqRTY YMcXG s5zyR nwXgM UFiYD"]')
    }

}

export default Login