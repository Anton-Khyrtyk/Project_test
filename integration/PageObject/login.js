class Login{

    btnLogin(){
        return cy.get('div[class="tHGFe"]').find('a[class= "cNQwb NSiTM aZVYw uvPOs US0rz yZhvJ TGtAB tV_oT"]').eq(1)
    }

    email(){
        return cy.get('[name="email"]')
    }

    password(){
        return cy.get('[name="password"]')
    }

    clickBtnLogin(){
        return cy.get('button[class="bU12G n342C NSiTM aZVYw dgTI9 n_u4C EbRXG l5z5h UFiYD"]')
    }

}

export default Login