
describe('Rozetka', ()=> {
    it('By', ()=> {
        cy.visit('https://rozetka.com.ua/')
          .get('input[type="text"]').type('Iphone 12')
          .get('[class="button button_color_green button_size_medium search-form__submit"]').click()
          .get('[href="https://rozetka.com.ua/ua/apple_iphone_12_128gb_purple/p245162401/"][title="Мобільний телефон Apple iPhone 12 128GB Purple (MJNP3FS/A)"]').click()
          .get('[class="buy-button button button--with-icon button--green button--medium buy-button--tile ng-star-inserted"]').click()
    })
})