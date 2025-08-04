
describe('Test Api GET', ()=>{
    // it('GET - Test', ()=>{
    //     cy.request('GET', 'https://www.swapi.tech/api/people/1').then((response) =>{
    //         expect(response).to.have.property('status', 200)
    //         expect(response.body).to.not.be.null
    //         //expect(response).to.have.property('mass', "77")
    //     } )
    // })

    // it('GET - TestFilms', ()=>{
    //     cy.request('GET', 'https://www.swapi.tech/api/films/1').then((response)=>{
    //         expect(response).to.have.property('status', 200)
            
    //     })
    // })

    it('GET - Test', ()=>{
        // cy.request('GET', 'https://www.swapi.tech/api/people').then((response) =>{
        //     expect(response).to.have.property('status', 200)
        //     expect(response.body.results).to.have.length(10)
        // } )

        cy.request('GET', 'https://www.swapi.tech/api/people')//.then((response.body.results).to.have.length(10))
    })


})