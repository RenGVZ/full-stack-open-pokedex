describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:4000')
    cy.contains('ivysaur')
  })
})