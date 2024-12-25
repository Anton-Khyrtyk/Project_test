
describe('Test Api GET', ()=>{
    it('GET - Test', ()=>{
        cy.request('GET', 'https://www.swapi.tech/api/people/1').then((response) =>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.filmes).to.have.length(4)
        } )
    })
})