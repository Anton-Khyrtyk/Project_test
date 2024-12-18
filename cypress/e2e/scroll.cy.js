// Lecture from 32:50 to 42:14

describe('Scrolling', function() {
    it('scroll to carousel', function() {
        cy.visit("https://unsplash.com/")
        cy.get('[data-testid="homepage-header-search-form-input"]').type("car{enter}")
        cy.get('h1').should('have.text', "Car")
        cy.scrollTo(0, 3500)
        cy.get('[data-masonryposition="8"] > .gFPnk > :nth-child(1) > .vthK5 > .gr86h > .mG0SP > .xH5KD > [data-testid="photo-grid-masonry-img"]').click()
    })
})